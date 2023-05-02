import React from 'react'

interface props {
    handleSubmit: () => void
    children: React.ReactNode
}

const FormComponent = ({ children, handleSubmit }: props) => {
    return (
        <form className="flex bg-white border-2 rounded-xl flex-col p-4 w-2/3  mx-auto mt-6 space-y-6" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default FormComponent