import Max from "../../../assets/team/max.jpg";
import Andrew from "../../../assets/team/andrew.jpg";
import Vanya from "../../../assets/team/vanya.jpg";
import Vasia from "../../../assets/team/vasia.jpg";

export function Team() {
    return (
        <div className="container lg:px-16 px-8 pt-40">
            <div>
                <h2 className="Title text-center mb-10">About us</h2>
                <p className="normal-text">
                    We are a young and hungry-for-success team from the very heart of Ukraine. Day to day, we struggle to be the best for those we value the most here at Playmanity - our followers. Every user is much more than a number, it's a responsibility for us to make them heard and answered.<br></br><br></br>
                    Our dream is to fight piracy with the most powerful weapon - a free price. Sounds like magic, isn't it? Thankfully, Playmanity is a magic wand that helps companies and their customers get the benefits of a free game without leaving the companies bankrupt.<br></br><br></br>
                    We love when you speak about us because that's the tiny thing that makes all gears work, so every tweet or share is a special place in our hearts. Let's make the magic real.
                </p>
            </div>
            <div className="mt-40">
                <h2 className="Title text-center mb-20">The Playmanity Team</h2>
                <div className="grid gap-10 sm:grid-cols-4 grid-cols-1 justify-items-center">
                    <img alt="Max" src={Max} className="rounded-full w-60 max-h-60 object-cover"  />
                    <img alt="Andrew" src={Andrew} className="rounded-full w-60 max-h-60 object-cover" />
                    <img alt="Vanya" src={Vanya} className="rounded-full w-60 max-h-60 object-cover" />
                    <img alt="Vasia" src={Vasia} className="rounded-full w-60 max-h-60 object-cover" />
                </div>
            </div>
        </div>
    )
}