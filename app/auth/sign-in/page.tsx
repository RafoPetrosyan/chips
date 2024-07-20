'use client'

import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Container, Box, Avatar, Typography, TextField, Button, Grid, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { signIn, useSession } from 'next-auth/react'
import _ from 'lodash'

type Inputs = {
   email: string
   password: string
}

const SignIn: FC = () => {
   const { data: session } = useSession()
   const router = useRouter()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>()

   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      const response = await signIn('credentials', {
         ...data,
         redirect: false,
      })

      // @ts-ignore
      if (response.error) {
         // @ts-ignore
         console.log(JSON.parse(response.error))
         return
      }

      router.push('/')

      console.log(response, 'response')
   }

   // useEffect(() => {
   //    if (_.isEmpty(session)) return
   //    router.back()
   // }, [session])

   return (
      <Container component="main" maxWidth="xs">
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
               Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
               <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  {...register('email', { required: 'Email is required' })}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ''}
               />
               <TextField
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register('password', { required: 'Password is required' })}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ''}
               />
               <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
               </Button>
               <Grid container>
                  <Grid item xs>
                     <Link href="#" variant="body2">
                        Forgot password?
                     </Link>
                  </Grid>
                  <Grid item>
                     <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                     </Link>
                  </Grid>
               </Grid>
            </Box>
         </Box>
      </Container>
   )
}

export default SignIn
