GetNodes("", false);

// * FILTER BUTTONS
const settings_list = [];
const buttons = document.getElementById("buttons");

if (buttons != null) {
  nodes.forEach((item) => {
    if (!settings_list.includes(item.filter_setting)) {
      settings_list.push(item.filter_setting);
    }
  });

  let str_buttons = "";

  for (let i = 0; i < settings_list.length; i++) {
    str_buttons += `<label class="filter-button text hover-pointer underline black-color" id="${settings_list[i]}" onclick="GetNodes('${settings_list[i]}')">${settings_list[i]}</label>`;
  }

  buttons.innerHTML += str_buttons;
}
