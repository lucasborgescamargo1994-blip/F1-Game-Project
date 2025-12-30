// Este objeto armazena os traçados de cada pista
export const TRACK_DATA = {
    "bahrain": {
        name: "Bahrein GP",
        points: [
            new THREE.Vector3(-450, 0, 300), 
            new THREE.Vector3(450, 0, 300), 
            new THREE.Vector3(550, 0, 100), 
            new THREE.Vector3(400, 0, -150), 
            new THREE.Vector3(0, 0, -200), 
            new THREE.Vector3(-400, 0, -100), 
            new THREE.Vector3(-550, 0, 100), 
            new THREE.Vector3(-450, 0, 300)
        ],
        width: 22,
        grassLimit: 18
    },
    "interlagos": {
        name: "Interlagos - Brasil",
        points: [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(200, 0, 50),
            new THREE.Vector3(300, 0, 200),
            new THREE.Vector3(150, 0, 400),
            new THREE.Vector3(-100, 0, 350),
            new THREE.Vector3(-250, 0, 150),
            new THREE.Vector3(-150, 0, 50),
            new THREE.Vector3(0, 0, 0)
        ],
        width: 20,
        grassLimit: 16
    }
};