import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss';
import useForm from '../../hooks/useForm';


const Register = () => {
    const {dataForm, handleChangeInputs} = useForm();
  return (
    <main className='main-register'>
        <h1>Crea una cuenta </h1>
        <form>
        <label >Digite correo electronico</label>
        <input type="text" name='name' placeholder='Nombre Apellido'  onChange={handleChangeInputs}/>
        <label >Digite correo electronico</label>
        <input type="text" name='email' placeholder='example@email.com' onChange={handleChangeInputs} />
        <label>Digite contraseña</label>
        <input type="password" name='password' placeholder='Contraseña' onChange={handleChangeInputs} />
        <label>Confirme su contraseña</label>
        <input type="password" name='repeatPassword' placeholder='Contraseña' onChange={handleChangeInputs} />
        <label>Imagen</label>
        <input type="file" name='avatar' onChange={handleChangeInputs} />
        <button type='submit'>Iniciar sesión</button>
      </form>
      <span>¿Ya tienes una cuenta? <Link to={'/login'}>Inicia sesión</Link></span>
    </main>
  )
}

export default Register