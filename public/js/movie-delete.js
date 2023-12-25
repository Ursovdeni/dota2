const deleteBtn = document.getElementById('deleteBtn');

deleteBtn.addEventListener('click', async (e) => {
  const { movieid } = e.target.dataset;
  try {
    const response = await fetch(`/api/news/${movieid}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      console.log(response);
      window.location.href = '/news';
    }
  } catch (error) {
    console.error(error);
  }
});
