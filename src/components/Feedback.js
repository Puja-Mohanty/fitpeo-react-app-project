import React from "react";

const Feedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      comment: "Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      name: "Dianne Russell",
      comment:
        "Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Dianne Russell",
      comment:
        "Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Dianne Russell",
      comment:
        "Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Dianne Russell",
      comment:
        "Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Dianne Russell",
      comment:
        "Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    // Add more feedback as needed
  ];

  return (
    <div className="col-span-12 md:col-span-5 lg:col-span-5 grid grid-cols-1">
      <div className="bg-gray-800 p-4 rounded mb-4">
        <h2 className="text-xl mb-4 poppins-bold">Customer's Feedback</h2>
        {feedbacks.map((fb) => (
          <div key={fb.name} className="mb-4 flex items-center">
            <img
              src={fb.avatar}
              alt={fb.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg poppins-regular">{fb.name}</h3>
              <div className="text-yellow-500">
                {Array(fb.rating).fill("★").join("")}
              </div>
              <p className="comment_font text-gray-500">{fb.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
