import React from 'react';
import "../../Styles/Sudule.css"
const Sudule = ({ sudule }) => {
  const { time, taining, author } = sudule;
  return (
    <tr className="padding-data">
      <td>
        <h6 className="table-time">{time}</h6>
      </td>
      <td>
        <h6 className="taining">{taining[0]}</h6>
        <h6 className="tainer">{author[0]}</h6>
      </td>
      <td>
        <h6 className="taining">{taining[1]}</h6>
        <h6 className="tainer">{author[1]}</h6>
      </td>
      <td>
        <h6 className="taining">{taining[2]}</h6>
        <h6 className="tainer">{author[2]}</h6>
      </td>
      <td className="text-center fw-bold">
        <h6 className="taining">{taining[3]}</h6>
        <h6 className="tainer">{author[3]}</h6>
      </td>
      <td className="text-center fw-bold">
        <h6 className="taining">{taining[4]}</h6>
        <h6 className="tainer">{author[4]}</h6>
      </td>
      <td className="text-center fw-bold">
        <h6 className="taining">{taining[5]}</h6>
        <h6 className="tainer">{author[5]}</h6>
      </td>
      <td className="text-center fw-bold">
        <h6 className="taining">{taining[6]}</h6>
        <h6 className="tainer">{author[6]}</h6>
      </td>
      {/* <td className="text-center fw-bold">
       <button>Edit</button>
       <button>Delete</button>
      </td> */}
    </tr>
  );
};

export default Sudule;