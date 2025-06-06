function generateNote() {
  const ageSex = document.getElementById('ageSex').value;
  const pmh = document.getElementById('pmh').value;
  const complaint = document.getElementById('complaint').value;
  const details = document.getElementById('details').value;

  const note = `${ageSex} with PMH of ${pmh || "no significant PMH"} c/o ${complaint}. ${details}`;
  document.getElementById('output').innerText = note;
}
