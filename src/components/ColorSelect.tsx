import { ColorConsumer } from "../contexts/ColorContext";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const ColorSelect = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "100px",
                  height: "100px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};

export default ColorSelect;
