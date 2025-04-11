import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'


window.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const todoList = document.getElementById("todoList");
  console.log("🟡 addButton:", addButton);

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      console.log("Input is empty!");
      return;
    }

    const li = document.createElement("li");
    li.className = "flex items-center justify-between p-2 bg-gray-50 rounded-lg";

    const textDiv = document.createElement("div");
    textDiv.className = "flex items-center space-x-2";

    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "text-gray-600 text-sm";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = `
  w-5 h-5 appearance-none border-2 border-orange-500 rounded-full
  checked:bg-orange-500 checked:border-orange-500
  cursor-pointer transition
  relative
`;
    checkbox.addEventListener("change", () => {
      span.classList.toggle("line-through", checkbox.checked);
      span.classList.toggle("text-gray-400", checkbox.checked);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "×";
    deleteButton.className =
      "w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-orange-500 hover:text-white transition-colors";
    deleteButton.addEventListener("click", () => li.remove());

    textDiv.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(textDiv);
    li.appendChild(checkbox);

    todoList.appendChild(li);
    taskInput.value = "";
  }

  // PWA install button
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('کاربر نصب رو قبول کرد');
        } else {
          console.log('کاربر نصب رو رد کرد');
        }
        deferredPrompt = null;
        installButton.style.display = 'none';
      });
    });
  });

  window.addEventListener('appinstalled', () => {
    console.log('اپلیکیشن با موفقیت نصب شد');
  });
});
console.log("🟢 اسکریپت اجرا شد");

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('✅ SW Registered:', reg.scope))
      .catch((err) => console.error('❌ SW Failed:', err));
  });
}

