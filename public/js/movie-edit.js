const editForm = document.getElementById('editForm');

editForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { movieid } = e.target.dataset;
  const formData = new FormData(e.target);
  const response = await fetch(`/api/news/${movieid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  if (response.status === 200) {
    window.location.href = `/news/${movieid}`;
  }
});
