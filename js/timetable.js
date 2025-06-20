const timetableData = {
  Monday: [
    {
      time: "08:00",
      class: "Morning Yoga",
      desc: "All Levels",
      location: "Studio 1",
      teacher: "Alice",
      capacity: { current: 8, max: 18 },
      bookable: true,
    },
    {
      time: "10:00",
      class: "Pilates",
      desc: "Beginner",
      location: "Studio 2",
      teacher: "Bob",
      capacity: { current: 12, max: 15 },
      bookable: true,
    },
    {
      time: "12:00",
      class: "Zumba",
      desc: "All Ages",
      location: "Studio 3",
      teacher: "Carol",
      capacity: { current: 7, max: 20 },
      bookable: true,
    },
    {
      time: "16:00",
      class: "Boxing",
      desc: "Intermediate",
      location: "Studio 4",
      teacher: "David",
      capacity: { current: 4, max: 10 },
      bookable: true,
    },
    {
      time: "18:00",
      class: "Evening Yoga",
      desc: "Advanced",
      location: "Studio 1",
      teacher: "Ella",
      capacity: { current: 13, max: 18 },
      bookable: true,
    },
    {
      time: "19:30",
      class: "Salsa Beginners",
      desc: "Beginner",
      location: "Studio 2",
      teacher: "Frank",
      capacity: { current: 10, max: 16 },
      bookable: true,
    },
  ],
  Tuesday: [
    {
      time: "09:00",
      class: "Power Pilates",
      desc: "Intermediate",
      location: "Studio 2",
      teacher: "Gina",
      capacity: { current: 9, max: 12 },
      bookable: true,
    },
    {
      time: "11:00",
      class: "Kids Ballet",
      desc: "Kids / Beginner",
      location: "Dance Studio 7",
      teacher: "Teacher Name",
      capacity: { current: 8, max: 18 },
      bookable: true,
    },
    {
      time: "14:00",
      class: "Tap Dance",
      desc: "Kids / Beginner",
      location: "Dance Studio 2",
      teacher: "Teacher Name",
      capacity: { current: 16, max: 20 },
      bookable: true,
    },
    {
      time: "16:00",
      class: "Street Dance",
      desc: "Teens / Beginner",
      location: "Dance Studio 4",
      teacher: "Teacher Name",
      capacity: { current: 12, max: 16 },
      bookable: true,
    },
    {
      time: "18:00",
      class: "Couples Only",
      desc: "Adults / Beginner",
      location: "Dance Studio 3",
      teacher: "Teacher Name",
      capacity: { current: 10, max: 18 },
      bookable: true,
    },
    {
      time: "19:00",
      class: "The Tango",
      desc: "21+ / Advanced",
      location: "Dance Studio 1",
      teacher: "Teacher Name",
      capacity: { current: 8, max: 18 },
      bookable: true,
    },
    {
      time: "20:00",
      class: "Salsa Dance",
      desc: "Intermediate",
      location: "Dance Studio 4",
      teacher: "Teacher Name",
      capacity: { current: 10, max: 12 },
      bookable: true,
    },
  ],
  Wednesday: [
    {
      time: "08:30",
      class: "Core Strength",
      desc: "All Levels",
      location: "Studio 3",
      teacher: "Helen",
      capacity: { current: 6, max: 14 },
      bookable: true,
    },
    {
      time: "10:00",
      class: "Modern Dance",
      desc: "Teens / Intermediate",
      location: "Studio 3",
      teacher: "Carol",
      capacity: { current: 7, max: 14 },
      bookable: true,
    },
    {
      time: "13:00",
      class: "Zumba",
      desc: "Adult / Beginner",
      location: "Studio 2",
      teacher: "Bob",
      capacity: { current: 11, max: 20 },
      bookable: true,
    },
    {
      time: "15:00",
      class: "Hip Hop",
      desc: "Teens / Advanced",
      location: "Studio 1",
      teacher: "Ivy",
      capacity: { current: 5, max: 10 },
      bookable: true,
    },
    {
      time: "17:00",
      class: "Evening Pilates",
      desc: "Intermediate",
      location: "Studio 4",
      teacher: "Ella",
      capacity: { current: 12, max: 16 },
      bookable: true,
    },
  ],
  Thursday: [
    {
      time: "08:00",
      class: "Morning Flow",
      desc: "Beginner",
      location: "Studio 2",
      teacher: "Jack",
      capacity: { current: 9, max: 16 },
      bookable: true,
    },
    {
      time: "10:30",
      class: "Jazz Dance",
      desc: "Kids / Beginner",
      location: "Dance Studio 3",
      teacher: "Teacher Name",
      capacity: { current: 7, max: 12 },
      bookable: true,
    },
    {
      time: "12:00",
      class: "Boxing",
      desc: "Adults / Intermediate",
      location: "Studio 4",
      teacher: "David",
      capacity: { current: 10, max: 14 },
      bookable: true,
    },
    {
      time: "15:00",
      class: "Tap Dance",
      desc: "Kids / Intermediate",
      location: "Dance Studio 2",
      teacher: "Teacher Name",
      capacity: { current: 8, max: 18 },
      bookable: true,
    },
    {
      time: "18:30",
      class: "Evening Zumba",
      desc: "Adults / All Levels",
      location: "Studio 1",
      teacher: "Helen",
      capacity: { current: 14, max: 20 },
      bookable: true,
    },
  ],
  Friday: [
    {
      time: "08:00",
      class: "Sunrise Yoga",
      desc: "All Levels",
      location: "Studio 1",
      teacher: "Alice",
      capacity: { current: 10, max: 18 },
      bookable: true,
    },
    {
      time: "11:00",
      class: "Salsa Dance",
      desc: "Intermediate",
      location: "Studio 2",
      teacher: "Frank",
      capacity: { current: 10, max: 12 },
      bookable: true,
    },
    {
      time: "13:00",
      class: "Contemporary",
      desc: "Teens / Beginner",
      location: "Studio 3",
      teacher: "Ivy",
      capacity: { current: 6, max: 15 },
      bookable: true,
    },
    {
      time: "16:00",
      class: "Boxing",
      desc: "All Levels",
      location: "Studio 4",
      teacher: "David",
      capacity: { current: 8, max: 16 },
      bookable: true,
    },
    {
      time: "18:00",
      class: "Jazz Funk",
      desc: "Adults / Intermediate",
      location: "Studio 1",
      teacher: "Jack",
      capacity: { current: 9, max: 14 },
      bookable: true,
    },
  ],
  Saturday: [
    {
      time: "09:00",
      class: "Pilates",
      desc: "Beginner",
      location: "Studio 2",
      teacher: "Bob",
      capacity: { current: 10, max: 15 },
      bookable: true,
    },
    {
      time: "11:00",
      class: "Ballet",
      desc: "Kids / Intermediate",
      location: "Dance Studio 7",
      teacher: "Teacher Name",
      capacity: { current: 10, max: 18 },
      bookable: true,
    },
    {
      time: "13:00",
      class: "Street Dance",
      desc: "Teens / Advanced",
      location: "Dance Studio 4",
      teacher: "Teacher Name",
      capacity: { current: 16, max: 20 },
      bookable: true,
    },
    {
      time: "15:00",
      class: "Hip Hop",
      desc: "Adults / Beginner",
      location: "Studio 1",
      teacher: "Helen",
      capacity: { current: 5, max: 14 },
      bookable: true,
    },
    {
      time: "17:00",
      class: "Couples Only",
      desc: "Adults / Intermediate",
      location: "Dance Studio 3",
      teacher: "Teacher Name",
      capacity: { current: 10, max: 18 },
      bookable: true,
    },
  ],
  Sunday: [
    {
      time: "09:00",
      class: "Morning Yoga",
      desc: "All Levels",
      location: "Studio 1",
      teacher: "Alice",
      capacity: { current: 8, max: 18 },
      bookable: true,
    },
    {
      time: "11:00",
      class: "Contemporary",
      desc: "Teens / Advanced",
      location: "Studio 3",
      teacher: "Carol",
      capacity: { current: 7, max: 14 },
      bookable: true,
    },
    {
      time: "13:00",
      class: "Tap Dance",
      desc: "Kids / Advanced",
      location: "Dance Studio 2",
      teacher: "Teacher Name",
      capacity: { current: 12, max: 20 },
      bookable: true,
    },
    {
      time: "15:00",
      class: "Jazz Dance",
      desc: "Adults / Intermediate",
      location: "Dance Studio 3",
      teacher: "Teacher Name",
      capacity: { current: 6, max: 12 },
      bookable: true,
    },
    {
      time: "17:00",
      class: "Salsa Dance",
      desc: "All Levels",
      location: "Studio 2",
      teacher: "Frank",
      capacity: { current: 10, max: 12 },
      bookable: true,
    },
  ],
};

function renderTable(day) {
  const table = document.getElementById("timetable-table");
  const rows = timetableData[day] || [];
  if (rows.length === 0) {
    table.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 40px 0;">No classes scheduled for this day.</td></tr>`;
    return;
  }
  table.innerHTML = rows
    .map(
      (row, idx) => `
        <tr data-row-index="${idx}">
          <td class="timetable-time">${row.time}</td>
          <td>
            <span class="timetable-class">${row.class}</span>
            <span class="timetable-class-desc">${row.desc}</span>
          </td>
          <td>
            <span class="timetable-location">${row.location}</span>
            <span class="timetable-teacher">${row.teacher}</span>
          </td>
          <td>
            <span class="timetable-capacity-label">Studio Capacity</span>
            <div class="timetable-capacity-bar-wrap">
              <div class="timetable-capacity-bar" style="width:${Math.round(
                (row.capacity.current / row.capacity.max) * 100
              )}%"></div>
            </div>
            <span class="timetable-capacity-count">${row.capacity.current} / ${
        row.capacity.max
      }</span>
          </td>
          <td>
            <button class="timetable-book-btn${
              row.bookable && row.capacity.current < row.capacity.max
                ? " selected"
                : ""
            }" 
                    ${
                      !row.bookable || row.capacity.current >= row.capacity.max
                        ? "disabled"
                        : ""
                    }>
              Book This Class
            </button>
          </td>
        </tr>
      `
    )
    .join("");
}

document
  .getElementById("timetable-tabs")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("timetable-tab")) {
      document
        .querySelectorAll(".timetable-tab")
        .forEach((tab) => tab.classList.remove("selected"));
      e.target.classList.add("selected");
      renderTable(e.target.dataset.day);
    }
  });

document
  .getElementById("timetable-table")
  .addEventListener("click", function (e) {
    if (
      e.target.classList.contains("timetable-book-btn") &&
      !e.target.disabled
    ) {
      const rowEl = e.target.closest("tr");
      if (!rowEl) return;
      const rowIdx = parseInt(rowEl.getAttribute("data-row-index"));
      const selectedDay = document.querySelector(".timetable-tab.selected")
        .dataset.day;
      const rowData = timetableData[selectedDay][rowIdx];

      if (rowData.capacity.current < rowData.capacity.max) {
        rowData.capacity.current++;
        renderTable(selectedDay);
        if (rowData.capacity.current >= rowData.capacity.max) {
          setTimeout(() => {
            alert("The class is full.");
          }, 100);
        }
      }
    }
  });

renderTable(document.querySelector(".timetable-tab.selected").dataset.day);
