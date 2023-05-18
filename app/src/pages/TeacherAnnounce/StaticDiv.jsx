import React from "react";

const StaticDiv = (props) => {
    const reviews = props.reviews;
    const fake_names = props.fake_names;
    const count = props.count;
    
    return (
        <div>
            <a className="text-2xl font-bold mt-5">📝 Reviews:</a>

            <div className="flex flex-col mt-2">
                {reviews.map((review) => {
                    const randomRating = Math.floor(Math.random() * 100);
                    if (randomRating < 80) {
                        return null;
                    } else {
                        count = count + 1;
                    }
                    return (
                        <div className="text-sm">
                            <div className="card bg-base-200 mb-2 text-primary-content">
                                <div className="card-body">
                                    <h6 className="text-sm card-title">{fake_names[0]}</h6>
                                    {"⭐".repeat(Math.floor(Math.random() * 2 + 3))}
                                    <p>{review}</p>

                                </div>
                            </div>

                        </div>
                    )
                })}
                {count === 0 && <p className="text-xl font-bold mt-5">No reviews yet</p>}
            </div>

        </div>
    )
}

export default StaticDiv;