import CardStatus from "../../UI/CardStatus/CardStatus";

function Status() {
    const cards = [
        { counter: "120", title: "Blogs", icon:"fa-building" },
        { counter: "500", title: "Users", icon:"fa-building" },
        { counter: "320", title: "Something", icon:"fa-building" },
        { counter: "50", title: "projects", icon:"fa-building" }
    ]
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {cards.map((item, i) => {
                            return (
                                    <div className="col-12 col-sm-6 col-md-3" key={i}>
                                        <CardStatus counter={item.counter} title={item.title} />
                                    </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Status; 