import { useState } from "react"

const data = [
    {
        question: 'How do I apply to BETA?',
        answer: "Just join our Discord server and wait for the next beta test.",
    },
    {
        question: 'Where can I download Playmanity App?',
        answer: "We are still developing our platform so check for updates.",
    },
    {
        question: 'When will be a full release of Playmanity for everyone?',
        answer: "We are currently on fire to release Playmanity as soon as possible. But for now, it is still in the development process.",
    },
    {
        question: 'Is this a cloud gaming platform?',
        answer: "No, for now, we don't support cloud gaming, but later on, maybe.",
    },
    {
        question: 'What operating systems does Playmanity support?',
        answer: "Playmanity support Windows, macOS, and Linux operating systems.",
    },
    {
        question: 'What games will there be?',
        answer: "You can find all of our available games in 🎮・games channel on Discord.",
    },
    {
        question: 'What games will there be?',
        answer: "We will launch on Kickstarter on August 27, so you can support us on Kickstarter. Register and click Remind me and check for updates on social media.",
    }
]
const Faq = () => {
    const [select, setSelected] = useState(null);

    const toggle = (i) => {
        if(select == i) {
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
                                <div className="flex items-center cursor-pointer hover:text-brand gap-5 py-5" onClick={() => toggle(i)}>
                                    <span className="Body-13 text-white flex-1">{item.question}</span>
                                    <span>{select === i ? "-" : "+"}</span>
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