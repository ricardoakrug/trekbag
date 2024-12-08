/* eslint-disable react/prop-types */

import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore.js";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
  const resetToInitial = useItemsStore((state) => state.resetToInitialItems);
  const removeAll = useItemsStore((state) => state.removeAllItems);

  // Secondary buttons settings
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to Initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove All Items",
      onClick: removeAll,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button, index) => (
        <Button
          key={`${button.text}-${index}`}
          onClick={button.onClick || (() => {})} // Provide a default no-op function
          buttonType="secondary"
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
