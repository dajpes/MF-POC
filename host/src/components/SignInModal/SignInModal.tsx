import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import type { User } from '../../hooks/authSchema'
import useAuth from '../../hooks/useAuth'
import Button from '../Shared/Button'
import Modal from '../Shared/Modal/Modal'
import { type SignInFields, SignInSchema } from './SignInSchema'
import styles from './signinModal.module.css'

interface Props {
  onDismiss: () => void
}
export default function SignInModal({ onDismiss }: Props) {
  const { signIn } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFields>({
    mode: 'onChange',
    resolver: zodResolver(SignInSchema),
  })

  const onSubmit: SubmitHandler<SignInFields> = async (data) => {
    await new Promise((r) => setTimeout(r, 600))

    const res = await fetch('/api/user.json')
    const user = (await res.json()) as User
    const { isSuccess } = signIn(user)

    if (isSuccess) {
      onDismiss()
    }
  }

  return (
    <Modal onClose={onDismiss}>
      <div>
        <h2>Sign in To Fan Wallet POC</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.label}>
            <span className={styles.labelTitle}>Email</span>
            <input
              className={styles.input}
              type="text"
              placeholder="test@email.com"
              {...register('email')}
            />
            {errors?.email && (
              <span className={styles.errorMessage}>
                {errors.email.message}
              </span>
            )}
          </label>
          <label className={styles.label}>
            <span className={styles.labelTitle}>Password</span>
            <input
              className={styles.input}
              type="password"
              placeholder="*****"
              {...register('password')}
            />
            {errors?.password && (
              <span className={styles.errorMessage}>
                {errors.password.message}
              </span>
            )}
          </label>
          <Button type="submit" className={styles.submitButton}>
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  )
}
