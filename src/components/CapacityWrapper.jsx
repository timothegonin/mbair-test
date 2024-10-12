import React from "react";

const CapacityWrapper = ({ capacityType, children }) => {
	return (
    <div className="col-sm-12 mt-3">
      <div className="bg-white p-3 d-flex flex-column" style={{borderRadius: "14px"}}>
        <p>
          {
            capacityType === "ram" ? "Sélectionnez la capacité de la mémoire" : "Sélectionnez la capacité de la stockage"
          }
        </p>
        {children}
      </div>
    </div>
  );
};

export default CapacityWrapper;
