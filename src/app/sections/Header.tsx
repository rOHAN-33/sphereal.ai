export const navItems =[
    {
        name:"features",
        href:"#features"
    },
    {
        name:"pricing",
        href:"#pricing"
    },
    {
        name:"about",
        href:"#about"
    }
]
export const loginItems =[
    {
        buttonVarient:"tertiary",
        name:"login",
        href:"#login"
    },
    {
        buttonVarient:"tertiary",
        name:"signup",
        href:"#sign-up"
    }
]

export default function Header() {
     return (
    <header className="border-b border-gray-200/20">
        <div className="container">
            <div className="h-18 flex items-center ">
                <div className="flex gap-4 items-center">
                    <div className="size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"></div>


                    <div className="font-extrabold text-2xl">sphereal.ai</div>
                </div>
                <div></div>
                <div>
                    <button>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </div>
        </div>
    </header>
  )

}