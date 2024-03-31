import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

export default function MessageDon({ message }) {
    const [count, setCount] = useState(Number(message.like));
    const [liked, setLiked] = useState(false);

    // Check local storage for the liked status of the message
    useEffect(() => {
        const isLiked = localStorage.getItem(message.id) === "true"; //true of false
        setLiked(isLiked);
    }, [message.id]);

    // Handle click event for liking the message
    const handleChange = async (e) => {
        e.preventDefault();

        if (!liked) {
            await router.put(`/like/${message.id}`, { count: count + 1 }); // Send PUT request
            setCount(count + 1); // Update count locally after successful request
            localStorage.setItem(message.id, true); // Set liked status in local storage
            setLiked(true); // Update liked state
        }
    };

    return (
        <div className="grid grid-cols-4 gap-2">
            <div className="footerRaound border mb-2 rounded-2xl p-3 col-span-3">
                <p className="text-m">{message.name}</p>
                <p className="text-xs text-wrap">{message.message}</p>
            </div>
            <button
                onClick={handleChange} // Attach handleChange function to onClick event
                disabled={liked} // Disable button if message is already liked
                className="footerRaound border mb-2 rounded-2xl p-3 flex justify-center items-center cursor-pointer"
            >
                {liked ? (
                    <i className="bi bi-suit-heart-fill font-lg m-2"></i>
                ) : (
                    <i className="bi bi-suit-heart font-lg m-2"></i>
                )}
                {liked ? count : count}
            </button>
        </div>
    );
}
