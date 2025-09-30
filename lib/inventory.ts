// Simple in-memory inventory counter with optional Upstash KV support

let inMemoryCounter = 0

export async function getEarlyBirdCount(): Promise<number> {
  // Check if Upstash is configured
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (upstashUrl && upstashToken) {
    try {
      const response = await fetch(`${upstashUrl}/get/early_bird_count`, {
        headers: {
          Authorization: `Bearer ${upstashToken}`,
        },
      })

      const data = await response.json()
      return data.result ? parseInt(data.result, 10) : 0
    } catch (error) {
      console.error('Error fetching from Upstash:', error)
      return inMemoryCounter
    }
  }

  // Fallback to in-memory
  return inMemoryCounter
}

export async function incrementEarlyBirdCount(): Promise<number> {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (upstashUrl && upstashToken) {
    try {
      const response = await fetch(`${upstashUrl}/incr/early_bird_count`, {
        headers: {
          Authorization: `Bearer ${upstashToken}`,
        },
      })

      const data = await response.json()
      return data.result
    } catch (error) {
      console.error('Error incrementing in Upstash:', error)
      inMemoryCounter++
      return inMemoryCounter
    }
  }

  // Fallback to in-memory
  inMemoryCounter++
  return inMemoryCounter
}

export async function getEarlyBirdAvailable(limit = 250): Promise<number> {
  const count = await getEarlyBirdCount()
  return Math.max(0, limit - count)
}
