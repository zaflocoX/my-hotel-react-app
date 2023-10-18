import React, { useContext } from 'react'
import './login.scss';
import useForm from '../../hooks/useForm';
import { AppContext } from '../../router/Router';
import { getUserByEmailAndPassword } from '../../services/userServices';


const Login = () => {
  const { dataForm, handleChangeInputs, reset } = useForm();
  const { userLogged: { userLoggedDispatch } } = useContext(AppContext);

  console.log(userLogged);

  const handleLogin = async(e) => {
    e.preventDefault();
    if(dataForm.email.trim() && dataForm.password.trim()){
      const user = await getUserByEmailAndPassword(dataForm.email, dataForm.password);
      if (user) {
        const action = {
          type: 'LOGIN',
          payload: {
            isAuthenticated: true,
            user:{
              ...user
            }
          }
        }
        console.log(action);
        userLoggedDispatch(action);
        Swal.fire(
          'Excelente!',
          'Has iniciadio sesión exitosamente',
          'success'
        )
      } else{
        Swal.fire(
          'Oops!',
          'Usuario y/o password incorrectos',
          'error'
        )
      }
    }
    
  }

  return (
    <main className='form-login'>
      <h1>Inicie sesión</h1>
      <form onSubmit={handleLogin}>
        <label >Digite correo electronico</label>
        <input type="text" name='email' placeholder='example@example.com' onChange={handleChangeInputs} />
        <label>Digite Cotraseña</label>
        <input type="password" name='password' placeholder='Contraseña' onChange={handleChangeInputs} />
        <button type='submit'>Iniciar sesión</button>
      </form>
      <span>¿Todavia no tienes una cuenta? <Link to={'/register'}>Regístrate</Link></span>
    </main>
  )
}

export default Login