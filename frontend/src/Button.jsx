import './App.css'

function Button({link,name,Image}) {

    return( 
            <>
                <div className = "flex  items-center text-center justify-center  px-3 py-1 hover:text-gray-500 hover:cursor-pointer gap-2">
                    <Image />
                    <a href = {link} target="_blank" className="text-sm"> {name}</a>

                </div>
            </>
        )

    
}
export default Button;