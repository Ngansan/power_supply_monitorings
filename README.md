# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1-Test SNMP trong snmp_test/
2️-Viết collector → lưu DB
3️-API đọc DB
4-Frontend fetch API
5️-SVG render

I. Thông tin cần lấy từ máy remote
- IP thiết bị (DB / PDU)
- SNMP version (v2c / v3)
- Community (hoặc user/pass v3)
- SNMP port (thường 161)
- MIB file từ vendor
- Biết thiết bị có bao nhiêu port / line

II. Setup env(WSL on VS Code)
wsl --install  => instal wsl ubuntu

Tools:
sudo apt update
sudo apt install snmp python3-pip python3-venv


Check SNMP Connection
Device ping: ping....
Test SNMP: snmpwalk -v2c -c public 192.168.x.x
=> OID -> right(not seen -> check again)

Neccessary OID:
- Current
- Voltage
- Load
- Port index

=> Using MIB file or snmpwalk

III. Write SNMP collector by python
1/ Setup env(create a new folder "snmp_test")
cd snmp_test
python3 -m venv venv
source venv/bin/activate
pip install pysnmp apscheduler
2/ Test SNMP Get
snmp_get(ip, oid)
3/Polling each 1 min
SNMP → parse → normalize data


IV. Design and saving database
V. After all -> create backend folder
cd backend
python3 -m venv venv
source venv/bin/activate
pip install flask pysnmp sqlalchemy






Viết collector mẫu hoàn chỉnh

Review DB schema

Thiết kế API response chuẩn cho UI

Giúp bạn mock data để dev UI song song
Viết backend skeleton sẵn chạy được

Tạo API mẫu cho UI

Hướng dẫn chạy đồng thời FE + BE


lab-power-monitor/
├── snmp_test/
│   ├── venv/
│   ├── test_snmp_get.py
│   └── README.md
│
├── backend/
│   ├── venv/
│   ├── app/
│   ├── requirements.txt
│   └── run.py
│
├── frontend/
│   └── ...















