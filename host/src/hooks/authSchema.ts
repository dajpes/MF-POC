import z from 'zod'

const UserSchema = z.object({
  id: z.number(),
  email: z.email(),
  name: z.string(),
  token: z.string(),
})

export type User = z.infer<typeof UserSchema>
