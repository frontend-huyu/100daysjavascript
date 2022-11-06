// input
const gLink = document.getElementById('glink');
const btn = document.getElementById('btn');
// output: textarea
const downloadLink = document.getElementById('download-link');
const embedAudio = document.getElementById('embed-audio');
const embedVideo = document.getElementById('embed-video');
// copy btn
const clear = document.querySelector('.clear');
const copyDirectLink = document.querySelector('.copy');
const copyAudioLink = document.querySelector('.copy-audio');
const copyVisualLink = document.querySelector('.copy-video');

function copyText(target) {
  let targetValue = target.value;
  if (targetValue === '') {
    alert('Please generate a download link.');
  } else {
    target.focus();
    target.select();
    target.setSelectionRange(0, targetValue.length);
    navigator.clipboard.writeText(targetValue).then(
      () => alert('Successfully copied!'),
      (err) => alert('Please try again.')
    );
  }
}

function clearForm() {
  gLink.value = '';
  downloadLink.textContent = '';
  embedAudio.textContent = '';
  embedVideo.textContent = '';
}

function generateLink(e) {
  e.preventDefault();
  const gLinkValue = gLink.value;
  const confirmLink = gLinkValue.includes('https://drive.google.com/file/d/');

  if (confirmLink) {
    const getDownloadLink = gLinkValue
      .replace(
        'https://drive.google.com/file/d/',
        'https://drive.google.com/uc?export=download&id='
      )
      .replace('/view?usp=sharing', '');
    const getAudioLink = `<audio width="300" height="32" controls="controls" src="${getDownloadLink}" type="audio/mp3"></audio>`;
    const getVisualLink = `<iframe src="${gLinkValue.replace(
      '/view?usp=sharing',
      ''
    )}/preview" width="560" height="315"></iframe>`;
    // console.log(getVisualLink);

    // NOTE: direct download link, audio embed link, video embed link
    downloadLink.textContent = getDownloadLink;
    embedAudio.textContent = getAudioLink;
    embedVideo.textContent = getVisualLink;

    // NOTE: copy event
    copyDirectLink.addEventListener('click', () => copyText(downloadLink));
    copyAudioLink.addEventListener('click', () => copyText(embedAudio));
    copyVisualLink.addEventListener('click', () => copyText(embedVideo));
  } else {
    alert('Please enter a valid URL.');
  }
}

btn.addEventListener('click', generateLink);
clear.addEventListener('click', clearForm);
