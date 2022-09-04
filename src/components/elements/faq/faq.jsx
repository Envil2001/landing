import { useState } from "react"

const data = [
    {
        question: 'When will be a full release of Playmanity for everyone?',
        answer: "Our asses are currently on fire to release Playmanity as soon as possible.",
    },
    {
        question: 'How do I apply to BETA of Playmanity?',
        answer: "Just join our Discord server and wait for the next beta test.",
    },
    {
        question: 'What operating systems does Playmanity support?',
        answer: "Playmanity supports Windows, macOS, and Linux.",
    },
    {
        question: 'Is this a cloud gaming platform?',
        answer: "No, for now, we don't support cloud gaming, but later on, maybe.",
    },
    {
        question: 'What games will there be?',
        answer: "ou can find all of our available games here - https://bit.ly/playmanitygames ",
    },
    {
        question: 'How do ads work?',
        answer: "Ads show before, after a game session, while loading screen or when game dev decide",
    },
    {
        question: 'How can I help you to grow financially?',
        answer: "For now, we are doing it without any money and if you want to help, text us and we will do Patreon soon",
    }
]
const Faq = () => {
    const [select, setSelected] = useState(null);

    const toggle = (i) => {
        if(select === i) {
            return setSelected(null);
        }
        setSelected(i);
    }
    return (
        <div className="w-full m-auto lg:px-16 px-8 pt-40 max-w-[900px]">
            <div>
                <div>
                    <h2 className="Title text-center mb-10">FAQ</h2>
                </div>
                <div>
                    {
                        data.map((item, i) => (
                            <div key={i}>
                                <div className={`group flex items-center cursor-pointer gap-5 py-5`} onClick={() => toggle(i)}>
                                    <span className={`${select === i && "text-brand" } Body-13 group-hover:text-brand text-white flex-1`}>{item.question}</span>
                                    <span className="group-hover:text-brand">{select === i ? "-" : "+"}</span>
                                </div>
                                <div className={select === i ? "block" : "hidden"}>
                                    <p className="Body-13">{item.answer}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Faq;