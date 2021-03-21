import logo from "./logo.svg";
import "./App.css";
import PriceCard from "./pricecard";

function App() {
  let carddetails = [
    {
      plan : "Free",
      price : 0 ,
      period : "month",
      currency : "$",
      listItems : [
        {
          itemname: "Single User",
          isDisabled : false
        },

        {
          itemname: "5GB Storage",
          isDisabled : false
        },
        {
          itemname: "Unlimited Public Projects",
          isDisabled : false
        },
        {
          itemname: "Community Access",
          isDisabled : false
        },
        {
          itemname: "Unlimited Private Projectsr",
          isDisabled : "true"
        },
        {
          itemname: "Dedicated Phone Support",
          isDisabled : "true"
        },
        {
          itemname: "Free Subdomain",
          isDisabled : "true"
        },
        {
          itemname: "Monthly Status Reports",
          isDisabled : "true"
        }
        
      ]
      


    },

    {
      plan : "PLUS",
      price : 9 ,
      period : "month",
      currency : "$",
      listItems : [
        {
          itemname: "5 User",
          isDisabled : false
        },

        {
          itemname: "50GB Storage",
          isDisabled : false
        },
        {
          itemname: "Unlimited Public Projects",
          isDisabled : false
        },
        {
          itemname: "Community Access",
          isDisabled : false
        },
        {
          itemname: "Unlimited Private Projectsr",
          isDisabled :false
        },
        {
          itemname: "Dedicated Phone Support",
          isDisabled : false
        },
        {
          itemname: "Free Subdomain",
          isDisabled : false
        },
        {
          itemname: "Monthly Status Reports",
          isDisabled : "true"
        }
        
      ]
      


    },

    {
      plan : "PRO",
      price : 49 ,
      period : "month",
      currency : "$",
      listItems : [
        {
          itemname: "Unlimited  User",
          isDisabled :false
        },

        {
          itemname: "150GB Storage",
          isDisabled : false
        },
        {
          itemname: "Unlimited Public Projects",
          isDisabled : false
        },
        {
          itemname: "Community Access",
          isDisabled : false
        },
        {
          itemname: "Unlimited Private Projectsr",
          isDisabled : false
        },
        {
          itemname: "Dedicated Phone Support",
          isDisabled : false
        },
        {
          itemname: "Unlimited Free Subdomain",
          isDisabled : false
        },
        {
          itemname: "Monthly Status Reports",
          isDisabled : false
        }
        
      ]
      


    }
    
  ]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
        {
          carddetails.map((price)=>{
            return <PriceCard details={price}></PriceCard>
          })
        }
        </div>
      </div>
    </section>
  );
}

export default App;
