import useNumberLocalStorage from "./Hooks/UseNumberStorage";
import useSettingStorage from "./Hooks/UseSettingStorage";

function App() {
  const [score, setScore] = useNumberLocalStorage("score", 300);

  const [settings, setSettings] = useSettingStorage("setting", {
    language: "English",
    notifications: true,
  });
  return (
    <>
      <div>
        <p>current score: {score}</p>
        <button onClick={() => setScore(score + 1)}>change score</button>
      </div>
      <div>
        <p>current settings: {settings.language}</p>
        <p>Notifications: {settings.notifications ? "On" : "Off"}</p>

        <button
          onClick={() =>
            setSettings({
              language: "Somali",
              notifications: false,
            })
          }
        >
          Change Settings
        </button>
      </div>
    </>
  );
}

export default App;
