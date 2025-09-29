import './App.css'

function Button({link,name,Image}) {

    return( 
            <>
                <a href = {link} target="_blank" className=" flex items-center text-center justify-center text-5xl px-3 py-1 hover:text-gray-500 hover:cursor-pointer gap-2">
                    <Image />
                    <div className= "text-sm">
                        {name}
                    </div>
                    
                </a>
            </>
        )

    
}
export default Button;