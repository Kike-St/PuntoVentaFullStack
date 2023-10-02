import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function RegisterPage() {

    const { register, 
        handleSubmit, 
        formState:{errors} 
    } = useForm();
    const {singUp, isAuthenticated, errores} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated]);

    


    const onSubmit = handleSubmit(async (values) => {
        singUp(values)
    })


  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

            {
            errores.map((error, i) => (
                <div className="bg-red-700 p-2 text-white rounded-md my-2 px-4 py-2" key={i}>
                    {error}
                </div>
            ))
            }


        <h1 className="text-xl font-bold">
          Registro
        </h1>


            <form onSubmit={onSubmit}>

            <input type="text" {...register('username', {required: true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Nombre de Usuario"
            />

            {
                errors.username && (
                    <p className="text-red-500">Es requerido un nombre de usuario</p>
                )
            }

            

            <input type="email" {...register('email', {required: true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Correo Electrónico"
            />


            {
                errors.email && (
                    <p className="text-red-500">Es requerido un correo electrónico</p>
                )
            }

            <input type="password" {...register('password', {required: true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Contraseña"
            />

            {
                errors.password && (
                    <p className="text-red-500">Es requerida una contraseña</p>
                )
            }

            <button type="submit" className="bg-zinc-100 text-zinc-700 px-4 py-2 rounded-md my-2 ">
                Registrarse
            </button>

            <Link to="/login">
                <button type="button" className="text-blue-600 px-4 py-2 rounded-md my-2">
                    ¿Ya tienes cuenta? Identifícate
                </button>
            </Link>
        </form>
        </div>


        
    </div>
  )
}

export default RegisterPage;