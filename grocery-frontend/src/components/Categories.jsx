function Categories() {

    const categories = [
        {
            name: "Fruits",
            image: "https://cdn-icons-png.flaticon.com/512/3194/3194766.png"
        },
        {
            name: "Vegetables",
            image: "https://cdn-icons-png.flaticon.com/512/2909/2909763.png"
        },
        {
            name: "Dairy",
            image: "https://cdn-icons-png.flaticon.com/512/2674/2674505.png"
        },
        {
            name: "Snacks",
            image: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png"
        },
        {
            name: "Beverages",
            image: "https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
        },
        {
            name: "Bakery",
            image: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png"
        },
        {
            name: "Personal Care",
            image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
        },
        {
            name: "Cleaning",
            image: "https://cdn-icons-png.flaticon.com/512/995/995053.png"
        }
    ];

    return (

        <section className="categories">

            <h2>Shop by Category</h2>

            <div className="category-grid">

                {
                    categories.map((item,index)=>(
                        <div className="category-card" key={index}>

                            <img src={item.image} alt={item.name}/>

                            <h3>{item.name}</h3>

                        </div>
                    ))
                }

            </div>

        </section>

    );

}

export default Categories;