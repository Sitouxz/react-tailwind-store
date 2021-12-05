import React from "react";
import Card from "./Card";
import cardData from "./cardData";

class CardContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            data: cardData,
        };
    }

    render() {
        const cardComponents = this.state.data.map((data) => (
            <Card key={data.id} data={data} />
        ));
        return (
            <div className="container mx-auto flex justify-center mb-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-2/3 gap-3 justify-items-stretch">
                    {cardComponents}
                </div>
            </div>
        );
    }
}

export default CardContainer;
