const input = document.getElementById('input');
const imgInput = document.getElementById('image-url');
const copyBtn = document.getElementById('btn-copy');
const pasteBtn = document.getElementById('btn-paste');
const permissionSection = document.getElementById('permissions');
const textField = document.getElementById('paste-text-field');
const imageField = document.getElementById('paste-image-field');

// // ClipboardEvent
// document.addEventListener('copy', function (e) {
//   e.clipboardData.setData('text/plain', 'foo');
//   // default behavior is to copy any selected text
//   e.preventDefault();
//   alert(
//     `Any copy by using "Ctrl + C" will be ${e.clipboardData.getData(
//       'text/plain'
//     )}`
//   );
// });

// // Clipboard Interface
// copyBtn.addEventListener('click', function (e) {
//   navigator.clipboard.writeText(input.value).then(
//     () => {
//       navigator.clipboard
//         .readText()
//         .then((data) => alert(`Your string: ${data}`));
//     },
//     (err) => alert(`Something wrong.`)
//   );
// });

// document.addEventListener('paste', (e) => {
//   e.preventDefault();

//   console.log(e.clipboardData.types);
//   console.log(e.clipboardData.items);
//   // if it is text
//   // ['text/plain', 'text/html']
//   // DataTransferItemList {0: DataTransferItem, 1: DataTransferItem, length: 2}
//   // NOTE: use DataTransfer.getData() to get data as string

//   // if it is image
//   // ['text/html', 'Files']
//   // DataTransferItemList {0: DataTransferItem, length: 1}
//   // NOTE: use DataTransferItem.getAsFile() to get blob
// });

// clipboardData(synchronous) => resolved Promise
// // text
// document.addEventListener('paste', (e) => {
//   e.preventDefault();
//   e.clipboardData.types.forEach(async (item) => {
//     if (item.match('text/plain')) {
//       const data = await e.clipboardData.getData('text/plain');
//       textField.textContent = data;
//     }
//   });
// });
// // image
// document.addEventListener('paste', (e) => {
//   e.preventDefault();
//   // e.clipboardData.items is array-like object
//   Array.from(e.clipboardData.items, async (item) => {
//     if (item.type.includes('image')) {
//       // get blob file // DataTransferItem.getAsFile()
//       const blob = await item.getAsFile();
//       const reader = new FileReader();
//       // convert to Base64
//       reader.readAsDataURL(blob);
//       // when reader is loaded, create new img element with result
//       reader.addEventListener('load', () => {
//         let img = document.createElement('img');
//         img.src = reader.result;
//         imageField.appendChild(img);
//       });
//     }
//   });
// });
// // NOTE: this way can use with image/png, image/jpeg, image/webp...

// clipboardData(synchronous) => ClipboardItem(asynchronous)

// Permissions API
// const permissionNames = [
//   { name: 'clipboard-read', allowWithoutGesture: false },
//   { name: 'clipboard-write', allowWithoutGesture: false },
// ];

// Promise.all(
//   permissionNames.map((description) => navigator.permissions.query(description))
// ).then((result) => {
//   // console.log(result);
//   // [PermissionStatus, PermissionStatus]
//   // PermissionStatus {name: 'clipboard_read', state: 'granted', onchange: null}
//   result.forEach((status, index) => {
//     let descriptorObj = permissionNames[index];
//     let descriptionName = descriptorObj.name;
//     let requestPermissionBtn = document.createElement('button');

//     requestPermissionBtn.title = 'Click to request Permission';
//     requestPermissionBtn.textContent = descriptionName;

//     requestPermissionBtn.onclick = () => {
//       // permissions.request is currently not supported in any browser
//       navigator.permissions
//         .request(descriptorObj)
//         .then((status) => {
//           console.log(`Permission ${status.state}`);
//         })
//         .catch((err) => {
//           console.log(`Permission was denied: ${err}`);
//         });
//     };

//     // set css attribute to understand Permission state
//     status.checker = () => {
//       requestPermissionBtn.setAttribute('data-state', status.state);
//     };
//     status.checker();
//     permissionSection.appendChild(requestPermissionBtn);
//   });
// });

//
// copyBtn.addEventListener('click', async () => {
//   console.log(await navigator.clipboard.read());
//   console.log(await navigator.clipboard.readText());

//   // text
//   // [ClipboardItem]
//   // Hello world

//   // image
//   // [ClipboardItem]
//   // *empty*
// });

// click to paste by using External Link
pasteBtn.addEventListener('click', async () => {
  try {
    const imgURL = imgInput.value;
    const data = await fetch(imgURL);
    const blob = await data.blob();
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
    const reader = new FileReader();
    // convert to Base64
    reader.readAsDataURL(blob);
    // when reader is loaded, create new img element with result
    reader.addEventListener('load', () => {
      let img = document.createElement('img');
      img.src = reader.result;
      imageField.appendChild(img);
    });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

// https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Chrome_Material_Icon-450x450.png

// document.getElementById('copyBtn').addEventListener('click', async (e) => {
//   try {
//     const imgURL = './images/offline.png';
//     const data = await fetch(imgURL);
//     const blob = await data.blob();
//     await navigator.clipboard.write([
//       new ClipboardItem({
//         [blob.type]: blob,
//       }),
//     ]);
//     console.log('Image copied.');
//   } catch (err) {
//     console.error(err.name, err.message);
//   }
// });

// MIME type image/jpeg not supported on write.
