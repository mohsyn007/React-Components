import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions=[
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 30,
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Personal training sessions (2 per month)"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Personal training sessions (4 per month)",
            "Group fitness classes",
            "Free water bottle"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 80,
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Personal training sessions (unlimited)",
            "All group fitness classes",
            "Nutrition consultation",
            "Free gym merchandise",
            "Access to swimming pool and sauna"
          ]
        },
        {
          "id": 4,
          "name": "VIP Plan",
          "price": 120,
          "features": [
            "24/7 gym access",
            "Dedicated locker",
            "Unlimited personal training sessions",
            "All group fitness classes and workshops",
            "Nutrition and diet consultation",
            "Access to swimming pool, sauna, and steam room",
            "Complimentary drinks and snacks",
            "Free gym merchandise",
            "Monthly health check-up"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl m-5 shadow-lg">Best Prices In The Town</h2>
           <div className="grid md:grid-cols-4 gap-5">
           {
                PriceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;