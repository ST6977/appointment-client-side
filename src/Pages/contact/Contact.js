import React from "react";
import Navigation from "../Shared/Navigation/Navigation";

const Contact = () => {
  return (
    // <div>
    //   <Navigation />
    //   <h1>This is Contact Page</h1>
    //   <p>

    // //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet
    // //     at incidunt quis perspiciatis iure repellat ut optio? Asperiores sit
    // //     dolor obcaecati consequuntur temporibus, officia iusto! Pariatur, rem
    // //     eaque! Dolor sint, vitae sapiente at reprehenderit repellendus soluta
    // //     quia officiis laudantium optio dolore sunt eaque rerum accusamus
    // //     mollitia a cum blanditiis aperiam aliquid quidem. Non quaerat ut
    // //     eligendi dolores dolor reprehenderit esse necessitatibus. Architecto
    // //     saepe molestias ex deleniti quis quasi iure quo labore dicta dolorem
    // //     eaque ipsa corrupti voluptates tenetur itaque nihil ut, consectetur
    // //     beatae optio! Facilis, dolorem iusto, voluptatum praesentium nesciunt
    // //     eaque quod aspernatur libero beatae delectus consequatur consequuntur
    // //     quaerat corporis animi quis aliquam velit soluta expedita tenetur
    // //     voluptatibus magni deserunt nostrum dolore! Neque velit natus, fugit
    // //     quam reprehenderit repellat expedita eveniet. Deserunt praesentium amet
    // //     quos fuga est assumenda consequatur quisquam, cupiditate alias enim
    // //     perferendis obcaecati nisi ex dicta, temporibus esse. Doloribus, eos
    // //     voluptate dolorem distinctio aliquam sit ipsam aut iure inventore autem
    // //     illum vel minima magni similique quibusdam corporis aspernatur sed!
    // //     Alias quidem minus consectetur nemo possimus fugit libero minima aliquam
    // //     nostrum quaerat cum ipsa vel, quis dolore, laborum aspernatur at fuga
    // //     mollitia itaque, doloremque repellendus. Culpa quisquam assumenda,
    // //     aspernatur maiores, quis animi ab exercitationem quos dolorum fugit
    // //     iure?
    // //   </p>
    // </div>
    //  hhhhhhhhh

    <div className="container mt-5">
      <div className=" w-50 mb-5 container border border-success border-5">
        <h3 className="text-center m-5">Fill Up This Form </h3>
        <p className="text-center">
          {" "}
          We Will Contact You As Soon As Possible,ThankYou
        </p>
        <form className="p-5 d-flex flex-column" action="">
          <input
            className="border border-dark"
            type="text"
            name="Name"
            id=""
            placeholder="Your Name"
          />
          <br />
          <input
            className="border border-dark"
            type="text"
            name="Name"
            id=""
            placeholder="Your Email"
          />
          <br />
          <input
            className="border border-dark"
            type="text"
            name="Name"
            id=""
            placeholder="Your Contact Number"
          />
          <br />
          <input
            className="border border-dark"
            type="text"
            name="Name"
            id=""
            placeholder="Full Address"
          />
          <button type="button" class="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
