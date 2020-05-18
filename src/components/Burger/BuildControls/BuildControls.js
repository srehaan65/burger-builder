import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price :<strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            key={ctrl.label}
            label={ctrl.label}
            type={ctrl.type}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        onClick={props.ordered}
        className={styles.OrderButton}
        disabled={!props.purchaseAble}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
