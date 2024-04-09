//variableStart
const documentRoutes = {
	turnlock100: {
		drawings: ['test1.pdf'],
		miscellaneous: ['test1.pdf', 'turnlock101.png', 'turnlock103.mp4'],
		imagesVideos: ['asd.png', 'turnlock101.png'],
		specifications: ['test1.pdf'],
	},
	tourlock180: {
		drawings: [],
		miscellaneous: [],
		imagesVideos: [],
		specifications: [],
	},
	lifelineSwing: {
		drawings: [],
		miscellaneous: [],
		imagesVideos: [],
		specifications: [],
	},
	circlelockSolo: {
		drawings: [],
		miscellaneous: [],
		imagesVideos: [],
		specifications: [],
	},
	circlelockCombi: {
		drawings: [],
		miscellaneous: [],
		imagesVideos: [],
		specifications: [],
	},
	turnlock150: {
		drawings: ['test1.pdf'],
		miscellaneous: ['test1.pdf', 'turnlock101.png', 'turnlock103.mp4'],
		imagesVideos: ['asd.png', 'turnlock101.png'],
		specifications: ['test1.pdf'],
	},
	turnlockSideGate: {
		drawings: [],
		miscellaneous: [],
		imagesVideos: [],
		specifications: [],
	},
	TQM: {
		drawings: [],
		miscellaneous: [],
		imagesVideos: [],
		specifications: [],
	},
	trilock60: {
		drawings: ['test1.pdf'],
		miscellaneous: ['test1.pdf', 'turnlock101.png', 'turnlock103.mp4'],
		imagesVideos: ['asd.png', 'turnlock101.png'],
		specifications: ['test1.pdf'],
	},
}
//variableEnd

// Variables
let video1,
	video2,
	video3,
	subVideo1,
	subVideo2,
	subVideo3,
	buttonContainerMade,
	buttonGrid,
	threesixty,
	cornerIcons,
	documents,
	inputButtonGrid,
	delay,
	subVideoTurn,
	subVideoBackLoop,
	buttonDimensions,
	firstPage,
	SecondPage,
	rotationPage,
	textContent,
	label,
	labelCont,
	paragraph,
	greenLine,
	titleH2,
	createdSubTitle,
	span,
	line,
	svg1,
	circle,
	backButton,
	backButtonRotation,
	brandIcon,
	backButtonContainer,
	backButtonContainerRotation,
	buttonGridContainer,
	buttonFontvar,
	globalFontvar,
	containVideoWidth,
	containVideoHeight,
	pCont,
	pCont2,
	list,
	pageIndex,
	nextButton,
	specificVideo,
	specificVideoLoop,
	globalTitleFontvar,
	globalMediumTitleFontvar,
	globalBigTitleFontvar,
	textLeft,
	textTop,
	textRight,
	textBottom,
	labelTitle,
	pContent,
	pContent2,
	subTitle,
	inputButtonId,
	delayInput,
	paint,
	clearcheck,
	elementContainer,
	videoPlaying,
	documentWindow = false

let currentButton = 'mainMenuFront'
let boxVideo = []
let buttonShort = []
let dataId = []
let dataVariant = []
let video1check = false
let video2check = false
let video3check = false

let x = window.matchMedia('(max-height: 550px)')
const loop = document.querySelector('#loopVideo')
const loopContainer = document.querySelector('#loop')
const video1Container = document.querySelector('#video1')
const video2Container = document.querySelector('#video2')
const video3Container = document.querySelector('#video3')
const specificVideoContainer = document.querySelector('#specificVideo')
const subVideo1Container = document.querySelector('#subVideo1')
const subVideo2Container = document.querySelector('#subVideo2')
const subVideo3Container = document.querySelector('#subVideo3')
const subVideoTurnContainer = document.querySelector('#subVideoTurn')
const subVideoBackLoopContainer = document.querySelector('#subVideoBackLoop')
const rotation = document.querySelector('#rotation')
const videoHolder = document.querySelector('#videoHolder')
const mainButtons = document.querySelector('#mainButtons')
const showCont = document.querySelector('#showCont')
const svgContainer = document.querySelectorAll('.svgContainer')
const buttonContainer = document.querySelectorAll('.buttonContainer')
const mainContainer = document.querySelector('.container')
const loader = document.querySelector('.loader')
const viewR_button = document.querySelector('#viewR_button')
const initial = document.querySelector('.initial')
const warningText = document.querySelector('.warningText')
const warning = document.querySelector('.warning')
const expand = document.querySelector('#expand')
const contract = document.querySelector('#contract')
const close = document.querySelector('#close')
const alertdiv = document.querySelector('.alertdiv')
const modalalert = document.querySelector('.modalalert')
const quality = document.querySelector('#quality_button')
const mainMenuB = document.querySelectorAll('.mainMenuB')
const titulo = document.querySelectorAll('.titulo')
const subVideoFinish1 = document.querySelector('#subVideoFinish1')
const subVideoFinish2 = document.querySelector('#subVideoFinish2')
const subVideoFinish3 = document.querySelector('#subVideoFinish3')

const exploreProContainer = document.querySelector('.exploreProContainer')
const exploreProImgContainer = document.querySelector('.exploreProImgContainer')
const exploreProImg = document.querySelector('.exploreProImg')
const buttonRow = document.querySelector('.buttonRow')

let isMobile = false
window.mobileCheck = function () {
	let mobile = (function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			isMobile = true
	})(navigator.userAgent || window.opera)
	console.log(isMobile)
}
mobileCheck()
let isIOS
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
	isIOS = true
} else {
	isIOS = false
}

// var buttonsText = []

const buttonContent = {
	turnlock100: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>FULL HEIGHT</span>  <span>TURNSTILE</span></span>`,
		subTitle: `Turnlock 100`,
		content: [],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Piggybacking\nPrevention`,
			`BE Secure`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`piggybackingP`,
			`beSecure`,
			`emergencyE`,
			`finishO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'standardO'>Standard Operation</span>`,

				content: [],
			},
			piggybackingP: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'piggybackingP'>Piggybacking Prevention</span>`,
				content: [],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'emergencyE'>Emergency Egress</span>`,
				content: [],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'finishO'>Finish Options</span>`,
				content: [],
				paint: 3,
				delay: [2],
			},
			beSecure: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'beSecure'>Finish Options</span>`,
				content: [],
				inputButtonGrid: [
					`Authorized\nEntry`,
					`Walk Away\nDetection`,
					`Piggybacking`,
				],
				inputButtonId: [`authorizedE`, `walkA`, `piggyBBS`],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},
		// src: buttonsText[1],
	},
	turnlock150: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>FULL HEIGHT</span> <span>TURNSTILE</span></span>`,
		subTitle: `Turnlock 150`,
		content: [],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Operation With\nMetal Detector`,
			`Piggybacking\nPrevention`,
			`BE Secure`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`operationW`,
			`piggybackingP`,
			`beSecure`,
			`emergencyE`,
			`finishO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'standardO'>Standard Operation</span>`,

				content: [],
			},
			operationW: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'standardO'>Operation with Metal Detector</span>`,

				content: [],
			},
			piggybackingP: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'piggybackingP'>Piggybacking Prevention</span>`,
				content: [],
			},
			beSecure: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'beSecure'>Finish Options</span>`,
				content: [],
				inputButtonGrid: [
					`Authorized\nEntry`,
					`Walk Away\nDetection`,
					`Piggybacking`,
				],
				inputButtonId: [`authorizedE`, `walkA`, `piggyBBS`],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'emergencyE'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, turnstile unlocks\noutbound allowing egress only`,
				],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'finishO'>Finish Options</span>`,
				paint: 2,
				delay: [2],
				content: [],
			},

			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},
	},
	trilock60: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>WAIST HIGH</span>  <span>TURNSTILES</span></span>`,
		subTitle: `Trilock 60`,
		content: [],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
		],
		inputButtonId: [`standardO`, `emergencyE`, `finishO`],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'standardO'>Standard Operation</span>`,
				content: [],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'emergencyE'>Emergency Egress</span>`,
				content: [],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'finishO'>Finish Options</span>`,
				content: [],
				paint: 2,
				delay: [2],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},
	},
	circlelockSolo: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>INTERLOCKING</span> <span>SECURITY PORTAL</span></span>`,
		subTitle: `Circlelock Solo`,
		content: [],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Piggybacking\n Prevention 1`,
			`Piggybacking\n Prevention 2`,
			`StereoVision`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
			`Glass\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`piggybackingP1`,
			`piggybackingP2`,
			`stereoV`,
			`emergencyE`,
			`finishO`,
			`glassO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Standard Operation</span>`,
				content: [],
			},
			piggybackingP1: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention 1</span>`,
				content: [],
			},
			piggybackingP2: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention 2</span>`,
				content: [],
			},
			stereoV: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				inputButtonGrid: [
					`One Person`,
					`Low Object`,
					`Multiple Persons`,
					`Sensor Blinding`,
				],
				inputButtonId: [`oneP`, `lowO`, `multipleP`, `sensorB`],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Emergency Egress</span>`,
				content: [],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'finishO'>Finish Options</span>`,
				content: [],
				paint: 3,
				delay: [2],
			},
			glassO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},

		// src: buttonsText[1],
	},
	circlelockCombi: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>INTERLOCKING</span> <span>SECURITY PORTAL</span></span>`,
		subTitle: `Circlelock Solo`,
		content: [],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Piggybacking\n Prevention 1`,
			`Piggybacking\n Prevention 2`,
			`StereoVision`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
			`Glass\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`piggybackingP1`,
			`piggybackingP2`,
			`stereoV`,
			`emergencyE`,
			`finishO`,
			`glassO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Standard Operation</span>`,

				content: [],
			},
			piggybackingP1: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention 1</span>`,
				content: [],
			},
			piggybackingP2: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention 2</span>`,
				content: [],
			},
			stereoV: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				inputButtonGrid: [
					`One Person`,
					`Low Object`,
					`Multiple Persons`,
					`Sensor Blinding`,
				],
				inputButtonId: [`oneP`, `lowO`, `multipleP`, `sensorB`],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Emergency Egress</span>`,
				content: [],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				paint: 3,
				delay: [2],
			},
			glassO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},

		// src: buttonsText[1],
	},
	tourlock180: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>SECURITY</span> <span>REVOLVING DOOR</span></span>`,
		subTitle: `Tourlock 180`,
		content: [],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Piggybacking\n Prevention`,
			`Tailgating\nPrevention 1`,
			`Tailgating\nPrevention 2`,
			`StereoVision`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
			`Glass\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`piggybackingP`,
			`tailgatingP1`,
			`tailgatingP2`,
			`stereoV`,
			`emergencyE`,
			`finishO`,
			`glassO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Standard Operation</span>`,

				content: [],
			},
			piggybackingP: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Piggybacking Prevention</span>`,
				content: [],
				content2: [],
			},
			tailgatingP1: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Tailgating Prevention 1</span>`,

				content: [],
				content2: [],
			},
			tailgatingP2: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Tailgating Prevention 2</span>`,

				content: [],
				content2: [],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Emergency Egress</span>`,
				content: [],
			},
			glassO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
			},
			stereoV: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				inputButtonGrid: [
					`One Person`,
					`Low Object`,
					`Multiple Persons`,
					`Sensor Blinding`,
				],
				inputButtonId: [`oneP`, `lowO`, `multipleP`, `sensorB`],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				paint: 3,
				delay: [3],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},
	},
	lifelineSwing: {
		textLeft: '0%',
		textBottom: '0%',
		title: `<span><span style = 'font-weight:bold'>OPTICAL</span> <span>TURNSTILE</span></span>`,
		subTitle: `Lifeline Speedlane Swing`,
		content: [],
		inputButtonGrid: [
			`Standard\nOperation`,
			`Tailgating\nDetection`,
			`Emergency\nEgress`,
			`Finish\nOptions`,
			`Glass\nOptions`,
		],
		inputButtonId: [
			`standardO`,
			`tailgatingD`,
			`emergencyE`,
			`finishO`,
			`glassO`,
		],
		boxInfo: {
			standardO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Standard Operation</span>`,
				content: [],
			},
			tailgatingD: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Tailgating Prevention</span>`,
				content: [],
			},
			emergencyE: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Emergency Egress</span>`,
				content: [
					`Upon signal from alarm system, turnstile panels unlock or swing out`,
				],
			},
			finishO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
				paint: 2,
				delay: [1],
			},
			glassO: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold'>Glass Options</span>`,
				content: [],
			},
			documents: {
				textLeft: '0%',
				textTop: '0%',
				title: `<span style = 'font-weight:bold' data-subId = 'documents'>Documents</span>`,
				content: [],
			},
		},

		// src: buttonsText[1],
	},
}

const rotationContent = {
	turnlock100:
		'https://rotation.marketscale.com/Companies/BoonEdam/Turnlock100/Turnlock100.spin?fullscreen=false',
	turnlock150:
		'https://rotation.marketscale.com/Companies/BoonEdam/Turnlock150/Turnlock150.spin?fullscreen=false',
	tourlock180:
		'https://rotation.marketscale.com/Companies/BoonEdam/Tourlock180/Tourlock180.spin?fullscreen=false',
	tourlock180Alt2:
		'https://rotation.marketscale.com/Companies/BoonEdam/Tourlock180/Tourlock180.spin?fullscreen=false',
	lifelineSwing:
		'https://rotation.marketscale.com/Companies/BoonEdam/LifeLineSwing/LifeLineSwing.spin?fullscreen=false',
	circlelockSolo:
		'https://rotation.marketscale.com/Companies/BoonEdam/CirclelockSolo/CirclelockSolo.spin?fullscreen=false',
	circlelockSoloAlt2:
		'https://rotation.marketscale.com/Companies/BoonEdam/CirclelockSolo/CirclelockSolo.spin?fullscreen=false',
	trilock60:
		'https://rotation.marketscale.com/Companies/BoonEdam/TriLock60/TriLock60.spin?fullscreen=false',
}
// Display fullscreen button
if (!isMobile) {
	fullscreen_button.style.display = 'none'
} else if (isIOS) {
	fullscreen_button.style.display = 'none'
}

// Set which videos are going to swap
function InterpolateVideo(videoToPause, videoToVanish, videoToPlay, props) {
	if (videoToPause) {
		videoToPause.pause()
	}

	if (props === 'back') {
		videoToVanish.classList.add('short-vanish')
		videoToVanish.classList.remove('show')
	} else {
		videoToVanish.style.opacity = 0
	}
	videoToPlay.style.opacity = 1
	videoToPlay.play()
}

// loop.currentTime = 60
// Vanish/show the main buttons and svgs
function HideShowMainButtons() {
	mainButtons.classList.toggle('show')
	mainButtons.classList.toggle('disabled')
	mainButtons.classList.toggle('short-vanish')
}

// Vanish/show when a main button is pressed
function HideShowCont() {
	showCont.classList.remove('hidden')
	showCont.classList.toggle('short-vanish')
	showCont.classList.toggle('show')
}

// Set animations for the buttons
function animations() {
	if (pCont) {
		paragraph.style.animation = 'fadein 0.5s ease-in-out forwards'

		const elementContainers = document.querySelectorAll('.elementContainer')

		let counter = 0.3

		if (delay) {
			console.log(delay)
			let inputArray = []
			let bool = false
			subVideo1.addEventListener('timeupdate', function () {
				console.log(subVideo1.currentTime)
				//currentTime use second, if you want min *60

				delay.forEach((element, i) => {
					if (Math.floor(subVideo1.currentTime) === element) {
						if (inputArray.length === 0) {
							if (elementContainers) {
								elementContainers[i].style.animation =
									'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
							}

							inputArray.push(Math.floor(subVideo1.currentTime))
							console.log(inputArray)
						} else {
							if (
								element ===
								inputArray.find((num) => {
									return num === element
								})
							) {
							} else {
								if (pageIndex === 'piggybackingP') {
									if (Math.floor(subVideo1.currentTime) === 36) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									}
								} else if (pageIndex === 'tailgatingP1') {
									if (Math.floor(subVideo1.currentTime) === 35) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									}
								} else if (pageIndex === 'tailgatingP2') {
									if (Math.floor(subVideo1.currentTime) === 30) {
										const elementContainersId =
											document.querySelectorAll('#pCont1')
										console.log(elementContainersId)
										elementContainersId.forEach((element) => {
											element.style.animation =
												'vanishpCont 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards '
											setTimeout(() => {
												element.style.display = 'none'
												const elementContainersId2 =
													document.querySelectorAll('#pCont2')
												elementContainersId2.forEach((element) => {
													element.style.display = 'flex'
												})
											}, 800)
										})
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									} else {
										elementContainers[i].style.animation =
											'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'

										inputArray.push(Math.floor(subVideo1.currentTime))
									}
								} else {
									elementContainers[i].style.animation =
										'fadein 0.5s ease-in-out forwards'
									inputArray.push(Math.floor(subVideo1.currentTime))
								}

								console.log(inputArray)
							}
						}
					}
				})

				if (inputArray.length === delay.length && !bool) {
					let removeCount = inputArray.length
					let elementContainersArray = Array.from(elementContainers)
					// console.log(elementContainersArray)
					elementContainersArray.splice(0, removeCount)

					elementContainersArray.forEach((element, i) => {
						element.style.animation =
							'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
						element.style.animationDelay = `${counter}s`
						counter += 0.2
					})
					bool = true
				}
			})
		} else {
			elementContainers.forEach((element, i) => {
				element.style.animation =
					'fadein 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards'
				element.style.animationDelay = `${counter}s`
				counter += 0.1

				setTimeout(() => {
					element.style.animation = 'fadein 0.5s ease-in-out forwards'
				}, 2000)
			})
		}

		buttonGridContainer.style.animation =
			'slideFromBottom 0.5s ease-out forwards'
		buttonGridContainer.style.animationDelay = `${counter}s`
		backButtonContainer.style.animation = 'slideFromTop 0.5s ease-out forwards'
		brandIcon.style.animation = 'show 0.5s ease-out forwards'
		brandIcon.style.animationDelay = `${counter}s`
		backButtonContainer.style.animationDelay = `${counter}s`
	}

	if (boxVideo) {
		boxVideo.forEach((e, i) => {
			boxVideo[i].style.animation =
				'growVideo 0.5s cubic-bezier(0.86, 0.01, 0.77, 0.18) forwards '
			boxVideo[i].style.animationDelay = '1.8s'
		})
	}
}

// Create the video tags storaged in videoContainer div
function createVideos(source1, source2, source3) {
	if (source1) {
		video1 = document.createElement('video')
		video1.src = source1
		video1.muted = true
		video1.setAttribute('playsinline', 'playsinline')
		video1.controls = false
		video1.autoplay = true
		video1.classList.add('video')
		video1.style.opacity = 0
		video1.pause()

		video1Container.appendChild(video1)
	}

	if (source2) {
		video2 = document.createElement('video')
		video2.src = source2
		video2.loop = true
		video2.muted = true
		video2.setAttribute('playsinline', 'playsinline')

		video2.controls = false
		video2.autoplay = true
		video2.classList.add('video')
		video2.style.opacity = 0
		video2.pause()

		video2Container.appendChild(video2)
	}
	if (source3) {
		video3 = document.createElement('video')
		video3.src = source3
		video3.muted = true
		video3.autoplay = true
		video3.setAttribute('playsinline', 'playsinline')
		video3.controls = false
		video3.classList.add('video')
		video3.style.opacity = 0
		video3.pause()

		video3Container.appendChild(video3)
	}
}

function createSubVideos(source1, source2, source3) {
	if (source1) {
		subVideo1 = document.createElement('video')
		subVideo1.src = source1
		subVideo1.muted = true
		subVideo1.setAttribute('playsinline', 'playsinline')
		subVideo1.controls = false
		subVideo1.autoplay = true
		subVideo1.classList.add('subVideo')
		subVideo1.style.opacity = 0
		subVideo1.pause()
		// loopContainer.appendChild(subVideo1)
		subVideo1Container.appendChild(subVideo1)
	}

	if (source2) {
		subVideo2 = document.createElement('video')
		subVideo2.src = source2
		// if (nextButton === 'emergencyE') {
		// 	subVideo2.loop = true
		// }
		subVideo2.loop = true
		subVideo2.muted = true
		subVideo2.setAttribute('playsinline', 'playsinline')
		subVideo2.controls = false
		subVideo2.autoplay = true
		subVideo2.classList.add('subVideo')
		subVideo2.style.opacity = 0
		subVideo2.pause()
		// loopContainer.appendChild(subVideo2)
		subVideo2Container.appendChild(subVideo2)
	}
	if (source3) {
		subVideo3 = document.createElement('video')
		subVideo3.src = source3
		subVideo3.muted = true
		subVideo3.autoplay = true
		subVideo3.setAttribute('playsinline', 'playsinline')
		subVideo3.controls = false
		subVideo3.classList.add('subVideo')
		subVideo3.style.opacity = 0
		subVideo3.pause()
		// loopContainer.appendChild(subVideo3)
		subVideo3Container.appendChild(subVideo3)
	}
}

// Create the content storaged in showCont div / Left and Top position of the container div, label title and content of the paragraph

function setMediaElementSource(index, route) {
	const selectedRoute = documentRoutes[route]
	const fileName = selectedRoute.imagesVideos[index]
	if (fileName) {
		const extension = fileName.split('.').pop()
		const filePath = `assets/${route}/documents/imagesVideos/${fileName}`

		if (extension === 'mp4') {
			const videoElement = document.createElement('video')
			videoElement.classList.add('videoShowed')
			videoElement.src = filePath
			videoElement.autoplay = true
			videoElement.poster = ''
			videoElement.controls = true
			return videoElement
		} else if (extension === 'png' || extension === 'jpg') {
			const imageElement = document.createElement('img')
			imageElement.classList.add('imageShowed')
			imageElement.src = filePath
			imageElement.poster = ''
			return imageElement
		}
	} else {
		console.log('chuska')
	}
}

function createContent(obj) {
	delay = ''
	if (obj) {
		textLeft = obj.textLeft
		textTop = obj.textTop
		textRight = obj.textRight
		textBottom = obj.textBottom
		labelTitle = obj.title
		pContent = obj.content
		pContent2 = obj.content2
		subTitle = obj.subTitle
		inputButtonGrid = obj.inputButtonGrid
		inputButtonId = obj.inputButtonId
		delayInput = obj.delay
		paint = obj.paint
	}

	const centerContainerMade = document.createElement('div')
	centerContainerMade.classList.add('centerContainer')
	centerContainerMade.setAttribute('id', 'centerContainer_text')
	const textContainerMade = document.createElement('div')
	textContainerMade.classList.add('textContainer')
	textContainerMade.style.width = containVideoWidth + 'px'
	textContainerMade.style.height = containVideoHeight + 'px'

	firstPage = document.createElement('div')
	firstPage.classList.add('firstPage')

	firstPage.style.right = textRight
	firstPage.style.top = textTop
	firstPage.style.left = textLeft
	firstPage.style.bottom = textBottom

	textContent = document.createElement('div')
	textContent.classList.add('text')
	buttonGridContainer = document.createElement('div')
	buttonGridContainer.classList.add('buttonGridContainer')
	buttonGrid = document.createElement('div')
	buttonGrid.classList.add('buttonGrid')

	if (inputButtonGrid) {
		if (inputButtonGrid.length === 5) {
			buttonGrid.style.gridTemplateColumns = 'repeat(5, 1fr)'
		}
		inputButtonGrid.forEach((e, i) => {
			buttonShort[i] = inputButtonId[i]
			const subButton = document.createElement('button')
			subButton.classList.add('pageButton')
			subButton.textContent = e
			subButton.style.fontSize = buttonFontvar
			buttonGrid.appendChild(subButton)
			buttonDimensions = subButton

			if (nextButton === 'beSecure' || nextButton === 'stereoV') {
				subButton.addEventListener('click', function () {
					HideShowCont()
					Array.from(buttonGrid.children).forEach((element) => {
						element.style.pointerEvents = 'none'
					})
					cornerIcons.children.forEach((element) => {
						element.style.pointerEvents = 'none'
					})
					backButton.style.pointerEvents = 'none'
					setTimeout(() => {
						showCont.innerHTML = ''
					}, 500)
					pageIndex = currentButton
					currentButton = nextButton
					nextButton = buttonShort[i]
					// console.log('nextButton:' + nextButton)
					// console.log('currentButton:' + currentButton)
					// console.log('pageIndex:' + pageIndex)
					specificVideo = document.createElement('video')
					specificVideo.src = `assets/${pageIndex}/${currentButton}/${nextButton}/${nextButton}1.mp4`
					specificVideo.muted = true
					specificVideo.setAttribute('playsinline', 'playsinline')
					specificVideo.controls = false
					specificVideo.autoplay = true
					specificVideo.classList.add('video')
					specificVideo.style.opacity = 0
					specificVideo.pause()

					specificVideoLoop = document.createElement('video')
					specificVideoLoop.src = `assets/${pageIndex}/${currentButton}/${nextButton}/${nextButton}2.mp4`
					specificVideoLoop.muted = true
					specificVideoLoop.setAttribute('playsinline', 'playsinline')
					specificVideoLoop.controls = false
					specificVideoLoop.autoplay = true
					specificVideoLoop.classList.add('video')
					specificVideoLoop.style.opacity = 0
					specificVideoLoop.pause()

					specificVideoContainer.appendChild(specificVideo)
					specificVideoContainer.appendChild(specificVideoLoop)

					let videosCheck = false
					check1()
					function check1() {
						clearcheck = setInterval(repeatcheck, 600)
						function repeatcheck() {
							if (specificVideo.readyState === 4) {
								videosCheck = true
							}
							setTimeout(() => {
								if (!videosCheck) {
									loader.style.zIndex = '200'
									loader.classList.add('show')
								}
							}, 3000)
							if (videosCheck) {
								loader.classList.remove('show')
								loader.classList.add('short-vanish')
								loader.style.zIndex = '-200'
								clearInterval(clearcheck)

								inputButtonGrid = ''
								createContent()

								specificVideo.classList.add('show')
								setTimeout(() => {
									subVideo1.remove()
									subVideo2.classList.add('show')
								}, 500)

								specificVideo.play()
								animations()
								HideShowCont()
								videoPlaying = 1
								specificVideo.addEventListener('ended', () => {
									videoPlaying = 2
									InterpolateVideo(subVideo2, specificVideo, specificVideoLoop)
								})
							}
						}
					}
				})
			} else {
				subButton.addEventListener('click', function () {
					HideShowCont()
					buttonGrid.children.forEach((element) => {
						element.style.pointerEvents = 'none'
					})
					cornerIcons.children.forEach((element) => {
						element.style.pointerEvents = 'none'
					})
					backButton.style.pointerEvents = 'none'

					setTimeout(() => {
						showCont.innerHTML = ''
					}, 500)

					pageIndex = currentButton
					currentButton = nextButton
					nextButton = buttonShort[i]
					console.log('nextButton:' + nextButton)
					console.log('currentButton:' + currentButton)
					console.log('pageIndex:' + pageIndex)
					// 	// Con esto veo que boton es /////////////////////////////////

					createSubVideos(
						`assets/${currentButton}/${nextButton}/${nextButton}1.mp4`,
						`assets/${currentButton}/${nextButton}/${nextButton}2.mp4`,
						`assets/${currentButton}/${nextButton}/${nextButton}3.mp4`
					)
					let videosCheck = false
					check1()
					function check1() {
						clearcheck = setInterval(repeatcheck, 600)

						function repeatcheck() {
							if (
								subVideo1.readyState === 4 &&
								subVideo2.readyState === 4 &&
								subVideo3.readyState === 4
							) {
								videosCheck = true
							} else {
								if (subVideo1.readyState !== 4) {
									subVideo1.load()
								}
								if (subVideo2.readyState !== 4) {
									subVideo2.load()
								}
								if (subVideo3.readyState !== 4) {
									subVideo3.load()
								}
							}
							setTimeout(() => {
								if (!videosCheck) {
									loader.style.zIndex = '200'
									loader.classList.add('show')
								}
							}, 3000)
							if (videosCheck) {
								loader.classList.remove('show')
								loader.classList.add('short-vanish')
								loader.style.zIndex = '-200'
								clearInterval(clearcheck)

								createContent(
									buttonContent[currentButton].boxInfo[nextButton],
									currentButton
								)

								// textContent.style.height = '100%'
								video2.classList.remove('show')
								video2.classList.add('short-vanish')

								subVideo1.style.opacity = 1

								subVideo1.play()
								videoPlaying = 1
								HideShowCont()
								animations()
								subVideo1.addEventListener('ended', () => {
									videoPlaying = 2
									console.log('subVideo1 ending')
									InterpolateVideo(video3, subVideo1, subVideo2)
								})
							}
						}
					}
				})
			}
		})
	}

	if (pContent) {
		pCont = document.createElement('div')
		pCont.classList.add('pCont')

		list = document.createElement('ul')
		paragraph = document.createElement('p')
		paragraph.textContent = pContent
		paragraph.style.fontSize = globalFontvar

		if (subTitle) {
			createdSubTitle = document.createElement('span')
			createdSubTitle.classList.add('createdSubtitle')
			createdSubTitle.textContent = subTitle
			createdSubTitle.style.fontWeight = 'bold'
			createdSubTitle.style.fontSize = globalMediumTitleFontvar
		}

		createBackButton()
		if (Array.isArray(pContent)) {
			if (delayInput) {
				delay = delayInput
			}

			function toggleEventListener(element, event, handler, add) {
				if (add) {
					element.addEventListener(event, handler)
				} else {
					element.removeEventListener(event, handler)
				}
			}

			let imageIndex = 0

			function createInfoContainer(title, icon, documentIndex) {
				const infoContainer = document.createElement('div')
				infoContainer.classList.add('infoContainer')

				const titleElement = document.createElement('h3')
				titleElement.classList.add('infoContainerTitle')
				titleElement.textContent = title

				const img = document.createElement('img')

				// documentIcons
				// here it get the ids

				img.setAttribute('id', title)
				img.classList.add('finishImg')
				img.src = `assets/icons/${icon}`

				img.addEventListener('click', () => {
					const textContainerImageModal = document.querySelector(
						'.textContainerImageModal'
					)
					const textContainerSpecModal = document.querySelector(
						'.textContainerSpecModal'
					)
					const specCenterContainer = document.querySelector(
						'.specCenterContainer'
					)
					if (documentIndex === 0) {
						documentWindow = 'img'
						textContainerImageModal.style.width = containVideoWidth + 'px'
						textContainerImageModal.style.height = containVideoHeight + 'px'
						const imageShowedHolder =
							document.querySelector('.imageShowedHolder')
						let mediaElement = null
						const leftArrow = document.querySelector('.leftArrow')
						const rightArrow = document.querySelector('.rightArrow')
						const imageX = document.querySelector('#imageX')

						toggleEventListener(
							leftArrow,
							'click',
							leftArrow.clickHandler,
							false
						)
						toggleEventListener(
							rightArrow,
							'click',
							rightArrow.clickHandler,
							false
						)
						toggleEventListener(imageX, 'click', imageX.clickHandler, false)
						leftArrow.clickHandler = () => {
							console.log('clicked left')
							imageIndex =
								(imageIndex -
									1 +
									documentRoutes[currentButton].imagesVideos.length) %
								documentRoutes[currentButton].imagesVideos.length

							mediaElement = setMediaElementSource(imageIndex, currentButton)
							imageShowedHolder.innerHTML = ''
							imageShowedHolder.appendChild(mediaElement)
						}
						console.log(documentRoutes[currentButton].imagesVideos.length)
						if (documentRoutes[currentButton].imagesVideos.length > 1) {
							leftArrow.style.display = 'block'
							toggleEventListener(
								leftArrow,
								'click',
								leftArrow.clickHandler,
								true
							)
						} else {
							leftArrow.style.display = 'none'
						}

						rightArrow.clickHandler = () => {
							imageIndex =
								(imageIndex + 1) %
								documentRoutes[currentButton].imagesVideos.length
							mediaElement = setMediaElementSource(imageIndex, currentButton)
							imageShowedHolder.innerHTML = ''
							imageShowedHolder.appendChild(mediaElement)
						}
						if (documentRoutes[currentButton].imagesVideos.length > 1) {
							rightArrow.style.display = 'block'
							toggleEventListener(
								rightArrow,
								'click',
								rightArrow.clickHandler,
								true
							)
						} else {
							rightArrow.style.display = 'none'
						}

						imageX.clickHandler = () => {
							textContainerImageModal.style.width = '0px'
							textContainerImageModal.style.height = '0px'
							documentWindow = false
						}
						toggleEventListener(imageX, 'click', imageX.clickHandler, true)

						mediaElement = setMediaElementSource(imageIndex, currentButton)

						if (mediaElement) {
							imageShowedHolder.innerHTML = ''
							imageShowedHolder.appendChild(mediaElement)
						} else {
							imageShowedHolder.innerHTML = ''
							const placeholderImg = document.createElement('img')
							placeholderImg.src = `assets/icons/noMedia.png`
							placeholderImg.classList.add('imageShowed')
							imageShowedHolder.appendChild(placeholderImg)
						}
					} else if (documentIndex === 1) {
						documentWindow = 'pdf'
						const specX = document.querySelector('#specX')

						textContainerSpecModal.style.width = containVideoWidth + 'px'
						textContainerSpecModal.style.height = containVideoHeight + 'px'
						toggleEventListener(specX, 'click', specX.clickHandler, false)
						specX.clickHandler = () => {
							documentWindow = false
							textContainerSpecModal.style.width = '0px'
							textContainerSpecModal.style.height = '0px'
						}
						toggleEventListener(specX, 'click', specX.clickHandler, true)
						specCenterContainer.innerHTML = ''
						const fileGrid = document.createElement('div')
						fileGrid.classList.add('fileGrid')
						specCenterContainer.appendChild(fileGrid)
						if (!documentRoutes[currentButton].specifications.length !== 0) {
							for (
								let index = 0;
								index < documentRoutes[currentButton].specifications.length;
								index++
							) {
								const file = document.createElement('div')
								file.classList.add('file')
								const fileImg = document.createElement('img')
								fileImg.classList.add('fileImg')
								fileImg.src = 'assets/icons/pdf.png'
								const fileTitle = document.createElement('h3')
								fileTitle.classList.add('fileTitle')
								fileTitle.style.fontSize = globalFontvar

								fileTitle.textContent =
									documentRoutes[currentButton].specifications[index]
								file.appendChild(fileImg)
								file.appendChild(fileTitle)
								fileGrid.appendChild(file)
								const pdfShowed = document.querySelector('.pdfShowed')
								const pdfX = document.querySelector('#pdfX')
								const pdfCenterContainer = document.querySelector(
									'.pdfCenterContainer'
								)
								pdfX.addEventListener('click', () => {
									pdfShowed.style.transform = 'scale(0)'

									setTimeout(() => {
										pdfCenterContainer.innerHTML = ''
									}, 300)
								})
								file.addEventListener('click', () => {
									const pdfContainer = document.createElement('div')
									pdfContainer.setAttribute('id', 'my-pdf')
									pdfCenterContainer.appendChild(pdfContainer)

									var pdfPath = `assets/${currentButton}/documents/specifications/${documentRoutes[currentButton].specifications[index]}`
									PDFObject.embed(pdfPath, '#my-pdf')
									pdfShowed.style.transform = 'scale(1)'
								})
							}
						} else {
							fileGrid.style.gridTemplateColumns = 'auto auto auto'
							const placeholderText = document.createElement('h2')
							placeholderText.textContent = 'No documents uploaded'
							placeholderText.classList.add('placeholderText')
							fileGrid.appendChild(placeholderText)
						}
					} else if (documentIndex === 2) {
						documentWindow = 'pdf'
						const specX = document.querySelector('#specX')

						textContainerSpecModal.style.width = containVideoWidth + 'px'
						textContainerSpecModal.style.height = containVideoHeight + 'px'
						toggleEventListener(specX, 'click', specX.clickHandler, false)
						specX.clickHandler = () => {
							documentWindow = false
							textContainerSpecModal.style.width = '0px'
							textContainerSpecModal.style.height = '0px'
						}
						toggleEventListener(specX, 'click', specX.clickHandler, true)

						specCenterContainer.innerHTML = ''
						const fileGrid = document.createElement('div')
						fileGrid.classList.add('fileGrid')
						specCenterContainer.appendChild(fileGrid)
						if (documentRoutes[currentButton].drawings.length !== 0) {
							for (
								let index = 0;
								index < documentRoutes[currentButton].drawings.length;
								index++
							) {
								const file = document.createElement('div')
								file.classList.add('file')
								const fileImg = document.createElement('img')
								fileImg.classList.add('fileImg')
								fileImg.src = 'assets/icons/pdf.png'
								const fileTitle = document.createElement('h3')
								fileTitle.classList.add('fileTitle')
								fileTitle.style.fontSize = globalFontvar

								fileTitle.textContent =
									documentRoutes[currentButton].drawings[index]
								file.appendChild(fileImg)
								file.appendChild(fileTitle)
								fileGrid.appendChild(file)
								const pdfShowed = document.querySelector('.pdfShowed')
								const pdfX = document.querySelector('#pdfX')
								const pdfCenterContainer = document.querySelector(
									'.pdfCenterContainer'
								)
								pdfX.addEventListener('click', () => {
									pdfShowed.style.transform = 'scale(0)'

									setTimeout(() => {
										pdfCenterContainer.innerHTML = ''
									}, 300)
								})
								file.addEventListener('click', () => {
									const pdfContainer = document.createElement('div')
									pdfContainer.setAttribute('id', 'my-pdf')
									pdfCenterContainer.appendChild(pdfContainer)

									console.log(documentRoutes[currentButton].drawings[index])
									var pdfPath = `assets/${currentButton}/documents/drawings/${documentRoutes[currentButton].drawings[index]}`
									PDFObject.embed(pdfPath, '#my-pdf')
									pdfShowed.style.transform = 'scale(1)'
								})
							}
						} else {
							fileGrid.style.gridTemplateColumns = 'auto auto auto'
							const placeholderText = document.createElement('h2')
							placeholderText.textContent = 'No documents uploaded'
							placeholderText.classList.add('placeholderText')
							fileGrid.appendChild(placeholderText)
						}
					} else if (documentIndex === 3) {
						documentWindow = 'pdf'
						const specX = document.querySelector('#specX')

						textContainerSpecModal.style.width = containVideoWidth + 'px'
						textContainerSpecModal.style.height = containVideoHeight + 'px'
						toggleEventListener(specX, 'click', specX.clickHandler, false)
						specX.clickHandler = () => {
							documentWindow = false
							textContainerSpecModal.style.width = '0px'
							textContainerSpecModal.style.height = '0px'
						}
						toggleEventListener(specX, 'click', specX.clickHandler, true)

						specCenterContainer.innerHTML = ''
						const fileGrid = document.createElement('div')
						fileGrid.classList.add('fileGrid')
						specCenterContainer.appendChild(fileGrid)
						if (documentRoutes[currentButton].miscellaneous.length !== 0) {
							for (
								let index = 0;
								index < documentRoutes[currentButton].miscellaneous.length;
								index++
							) {
								const file = document.createElement('div')
								file.classList.add('file')
								const fileImg = document.createElement('img')
								fileImg.classList.add('fileImg')
								const fileExtension = documentRoutes[
									currentButton
								].miscellaneous[index]
									.split('.')
									.pop()
								switch (fileExtension) {
									case 'png':
										fileImg.src = 'assets/icons/img.png'
										break
									case 'jpg':
										fileImg.src = 'assets/icons/img.png'
										break
									case 'mp4':
										fileImg.src = 'assets/icons/video.png'
										break
									case 'pdf':
										fileImg.src = 'assets/icons/pdf.png'
										break

									default:
										break
								}

								const fileTitle = document.createElement('h3')
								fileTitle.classList.add('fileTitle')
								fileTitle.style.fontSize = globalFontvar

								fileTitle.textContent =
									documentRoutes[currentButton].miscellaneous[index]
								file.appendChild(fileImg)
								file.appendChild(fileTitle)
								fileGrid.appendChild(file)
								const pdfShowed = document.querySelector('.pdfShowed')
								const pdfX = document.querySelector('#pdfX')
								const pdfCenterContainer = document.querySelector(
									'.pdfCenterContainer'
								)
								pdfX.addEventListener('click', () => {
									pdfShowed.style.transform = 'scale(0)'

									setTimeout(() => {
										pdfCenterContainer.innerHTML = ''
									}, 300)
								})
								file.addEventListener('click', () => {
									const fileExtension = documentRoutes[
										currentButton
									].miscellaneous[index]
										.split('.')
										.pop()

									switch (fileExtension) {
										case 'png':
											let imgPath = `assets/${currentButton}/documents/miscellaneous/${documentRoutes[currentButton].miscellaneous[index]}`
											const imageElement = document.createElement('img')
											imageElement.classList.add('imageShowed')
											imageElement.src = imgPath
											imageElement.poster = ''
											pdfCenterContainer.appendChild(imageElement)
											break
										case 'jpg':
											imgPath = `assets/${currentButton}/documents/miscellaneous/${documentRoutes[currentButton].miscellaneous[index]}`
											imageElement = document.createElement('img')
											imageElement.classList.add('imageShowed')
											imageElement.src = imgPath
											imageElement.poster = ''
											pdfCenterContainer.appendChild(imageElement)
											break
										case 'mp4':
											const videoElement = document.createElement('video')
											videoElement.classList.add('videoShowed')
											let videoPath = `assets/${currentButton}/documents/miscellaneous/${documentRoutes[currentButton].miscellaneous[index]}`
											videoElement.src = videoPath
											videoElement.autoplay = true
											videoElement.poster = ''
											videoElement.controls = true
											pdfCenterContainer.appendChild(videoElement)

											break
										case 'pdf':
											const pdfContainer = document.createElement('div')
											pdfContainer.setAttribute('id', 'my-pdf')
											pdfCenterContainer.appendChild(pdfContainer)
											let pdfPath = `assets/${currentButton}/documents/miscellaneous/${documentRoutes[currentButton].miscellaneous[index]}`
											PDFObject.embed(pdfPath, '#my-pdf')

											break

										default:
											break
									}
									pdfShowed.style.transform = 'scale(1)'
								})
							}
						} else {
							fileGrid.style.gridTemplateColumns = 'auto auto auto'
							const placeholderText = document.createElement('h2')
							placeholderText.textContent = 'No documents uploaded'
							placeholderText.classList.add('placeholderText')
							fileGrid.appendChild(placeholderText)
						}
					}
					window.addEventListener('resize', () => {
						if (documentWindow === 'img') {
							textContainerImageModal.style.width = containVideoWidth + 'px'
							textContainerImageModal.style.height = containVideoHeight + 'px'
						} else if (documentWindow === 'pdf') {
							textContainerSpecModal.style.width = containVideoWidth + 'px'
							textContainerSpecModal.style.height = containVideoHeight + 'px'
						}
					})
				})

				infoContainer.appendChild(titleElement)
				infoContainer.appendChild(img)

				return infoContainer
			}

			if (nextButton === 'documents') {
				elementContainer = document.createElement('span')
				firstPage.style.justifyContent = 'flex-start'
				elementContainer.classList.add(
					'elementContainer',
					'imageContainer',
					'documentsContainer'
				)

				const documentTypes = [
					{ title: 'Photos/Videos', icon: 'documents1.png' },
					{ title: 'Specifications', icon: 'documents2.png' },
					{ title: 'Drawings', icon: 'documents3.png' },
					{ title: 'Miscellaneous', icon: 'documents4.png' },
				]

				documentTypes.forEach(({ title, icon }, i) => {
					const infoContainer = createInfoContainer(title, icon, i)
					elementContainer.appendChild(infoContainer)
				})

				paragraph.appendChild(elementContainer)
			} else if (nextButton === 'finishO') {
				console.log('finishO')
				elementContainer = document.createElement('span')
				elementContainer.classList.add(
					'elementContainer',
					'imageContainer',
					'finishContainer'
				)
				if (paint === 2) {
					subVideoFinish1.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${1}.mp4`
					subVideoFinish2.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${2}.mp4`
				} else if (paint === 3) {
					subVideoFinish1.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${1}.mp4`
					subVideoFinish2.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${2}.mp4`
					subVideoFinish3.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${3}.mp4`
				}

				for (let i = 0; i < paint; i++) {
					let infoContainer = document.createElement('div')
					infoContainer.classList.add('infoContainer')

					let image = document.createElement('img')
					image.classList.add('finishImg')
					image.src = `assets/${currentButton}/${nextButton}/${nextButton}${
						i + 1
					}.png`
					if (isMobile) {
						image.style.width = '6em'
					} else {
						image.style.width = '6em'
					}
					image.addEventListener('click', () => {
						if (i + 1 === 1) {
							subVideoFinish1.style.opacity = 1
							subVideoFinish2.style.opacity = 0
							subVideoFinish3.style.opacity = 0
							subVideo2.style.opacity = 0
						}
						if (i + 1 === 2) {
							subVideoFinish1.style.opacity = 0
							subVideoFinish2.style.opacity = 1
							subVideoFinish3.style.opacity = 0
							subVideo2.style.opacity = 0
						}
						if (i + 1 === 3) {
							subVideoFinish1.style.opacity = 0
							subVideoFinish2.style.opacity = 0
							subVideoFinish3.style.opacity = 1
							subVideo2.style.opacity = 0
						}
						subVideo2.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${
							i + 1
						}.mp4`
						subVideo3.src = `assets/${currentButton}/${nextButton}/paint/${nextButton}${
							i + 1
						}.mp4`
					})

					infoContainer.appendChild(image)
					elementContainer.appendChild(infoContainer)
					pCont.appendChild(paragraph)
					paragraph.appendChild(elementContainer)
				}

				paragraph.appendChild(elementContainer)
			} else {
				pContent.forEach((e) => {
					if (Number.isInteger(e)) {
						elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer', 'imageContainer')
						for (let i = 0; i < e; i++) {
							let image = document.createElement('img')

							if (
								nextButton === 'tourlock180' ||
								nextButton === 'tourlock180Alt2' ||
								nextButton === 'circlelockSolo' ||
								nextButton === 'circlelockSoloAlt2'
							) {
								image.classList.add('tableImg')
								image.src = `assets/${currentButton}/${nextButton}/${nextButton}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '20em'
								} else {
									image.style.width = '24em'
								}
							} else {
								image.classList.add('finishImg')
								image.src = `assets/${currentButton}/${pageIndex}/${pageIndex}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '6em'
								} else {
									image.style.width = '6em'
								}
							}

							elementContainer.appendChild(image)
							paragraph.appendChild(elementContainer)
						}
					} else {
						elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer')
						elementContainer.setAttribute('id', 'pCont1')

						let icon = document.createElement('img')
						icon.src = 'assets/icons/bp.png'
						icon.style.width = '1.3em'

						let element = document.createElement('span')
						element.textContent = e
						element.style.fontSize = globalFontvar
						elementContainer.appendChild(icon)
						elementContainer.appendChild(element)
						paragraph.appendChild(elementContainer)
					}
				})
			}
		}

		if (pContent2) {
			if (Array.isArray(pContent2)) {
				if (delayInput) {
					delay = delayInput
				}
				console.log(nextButton)
				pContent2.forEach((e) => {
					if (Number.isInteger(e)) {
						elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer', 'imageContainer')
						for (let i = 0; i < e; i++) {
							let image = document.createElement('img')
							image.classList.add('extraImg')
							if (
								nextButton === 'tourlock180' ||
								nextButton === 'tourlock180Alt2' ||
								nextButton === 'circlelockSolo' ||
								nextButton === 'circlelockSoloAlt2'
							) {
								image.src = `assets/${currentButton}/${nextButton}/${nextButton}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '20em'
								} else {
									image.style.width = '25em'
								}
							} else {
								image.src = `assets/${currentButton}/${pageIndex}/${pageIndex}${
									i + 1
								}.png`
								if (isMobile) {
									image.style.width = '8em'
								} else {
									image.style.width = '6em'
								}
							}

							elementContainer.appendChild(image)
							paragraph.appendChild(elementContainer)
						}
					} else {
						let elementContainer = document.createElement('span')
						elementContainer.classList.add('elementContainer')
						elementContainer.setAttribute('id', 'pCont2')
						let icon = document.createElement('img')
						icon.src = 'assets/icons/bp.png'
						icon.style.width = '1.3em'

						let element = document.createElement('span')
						element.textContent = e
						element.style.fontSize = globalFontvar
						elementContainer.appendChild(icon)
						elementContainer.appendChild(element)
						paragraph.appendChild(elementContainer)
					}
				})
			}
		}
		// pCont.appendChild(titleH2)
		if (nextButton === 'documents' || nextButton === 'finishO') {
			pCont.appendChild(paragraph)
			textContent.appendChild(pCont)
		}
	}

	firstPage.appendChild(textContent)
	if (nextButton === 'beSecure' || nextButton === 'stereoV') {
		let gridTitle = document.createElement('h3')
		gridTitle.classList.add('gridTitle')

		if (nextButton === 'beSecure') {
			gridTitle.textContent = 'BE Secure scenarios'
		} else if (nextButton === 'stereoV') {
			gridTitle.textContent = 'StereoVision scenarios'
		}

		buttonGridContainer.style.flexDirection = 'column'
		buttonGridContainer.style.justifyContent = 'flex-end'
		buttonGridContainer.style.alignItems = 'flex-start'
		buttonGridContainer.appendChild(gridTitle)
	}
	buttonGridContainer.appendChild(buttonGrid)

	if (
		nextButton === 'turnlock100' ||
		nextButton === 'tourlock180' ||
		nextButton === 'lifelineSwing' ||
		nextButton === 'circlelockSolo' ||
		nextButton === 'circlelockCombi' ||
		nextButton === 'turnlock150' ||
		nextButton === 'trilock60'
	) {
		cornerIcons = document.createElement('div')
		cornerIcons.classList.add('cornerIcons')

		documents = document.createElement('img')
		documents.classList.add('documents')
		documents.src = 'assets/icons/document.png'

		documents.addEventListener('click', function () {
			HideShowCont()
			buttonGrid.children.forEach((element) => {
				element.style.pointerEvents = 'none'
			})
			cornerIcons.children.forEach((element) => {
				element.style.pointerEvents = 'none'
			})
			setTimeout(() => {
				showCont.innerHTML = ''
			}, 500)

			currentButton = nextButton
			nextButton = 'documents'

			console.log('nextButton:' + nextButton)
			console.log('currentButton:' + currentButton)
			console.log('pageIndex:' + pageIndex)
			// 	// Con esto veo que boton es /////////////////////////////////
			createSubVideos(
				`assets/${currentButton}/${nextButton}/${nextButton}1.mp4`,
				`assets/${currentButton}/${nextButton}/${nextButton}2.mp4`,
				`assets/${currentButton}/${nextButton}/${nextButton}3.mp4`
			)
			let videosCheck = false
			check1()
			function check1() {
				clearcheck = setInterval(repeatcheck, 600)
				function repeatcheck() {
					if (
						subVideo1.readyState === 4 &&
						subVideo2.readyState === 4 &&
						subVideo3.readyState === 4
					) {
						videosCheck = true
					} else {
						if (subVideo1.readyState !== 4) {
							subVideo1.load()
						}
						if (subVideo2.readyState !== 4) {
							subVideo2.load()
						}
						if (subVideo3.readyState !== 4) {
							subVideo3.load()
						}
					}
					setTimeout(() => {
						if (!videosCheck) {
							loader.style.zIndex = '200'
							loader.classList.add('show')
						}
					}, 3000)
					if (videosCheck) {
						loader.classList.remove('show')
						loader.classList.add('short-vanish')
						loader.style.zIndex = '-200'
						clearInterval(clearcheck)

						createContent(
							buttonContent[currentButton].boxInfo[nextButton],
							currentButton
						)
						// textContent.style.height = '100%'
						video2.classList.remove('show')
						video2.classList.add('short-vanish')
						subVideo1.style.opacity = 1
						setTimeout(() => {
							subVideo1.play()
							videoPlaying = 1
							subVideo1.addEventListener('ended', () => {
								videoPlaying = 2
								animations()
								InterpolateVideo(video3, subVideo1, subVideo2)
								HideShowCont()
							})
						}, 0)
					}
				}
			}
		})
		threesixty = document.createElement('img')
		threesixty.classList.add('threesixty')
		threesixty.src = 'assets/icons/threesixtyLogo.png'
		threesixty.addEventListener('click', () => {
			createRotation()
		})

		buttonGridContainer.appendChild(cornerIcons)
		cornerIcons.appendChild(documents)
		cornerIcons.appendChild(threesixty)
	}

	firstPage.appendChild(buttonGridContainer)

	showCont.appendChild(centerContainerMade)

	centerContainerMade.appendChild(textContainerMade)
	textContainerMade.appendChild(firstPage)
}
// asd
// Create the svgs for the showCont div / 4 first parameters are the x and y points of the first and second point respectively, last 2 are the x and y points of the dot
function setFontSizes() {
	const button = document.querySelectorAll('.button')

	const titulo = document.querySelector('.titulo')

	globalFontvar = `calc(6px + (18 - 6) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	globalTitleFontvar = `calc(12px + (24 - 12) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalMediumTitleFontvar = `calc(7px + (35 - 7) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`
	globalBigTitleFontvar = `calc(8px + (35 - 8) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	buttonFontvar = `calc(4px + (15 - 4) * ((${
		containVideoWidth + 'px'
	} - 320px) / (1440 - 320)))`

	// mainBoxText.style.fontSize = globalFontvar

	for (let i = 0; i < button.length; i++) {
		button[i].style.fontSize = globalFontvar
	}
	titulo.style.fontSize = globalTitleFontvar

	for (let i = 0; i < button.length; i++) {
		button[i].style.fontSize = globalFontvar
		// button[i].style.width = `calc(85px + (220 - 85) * ((${
		// 	containVideoWidth + 'px'
		// } - 320px) / (1440 - 320)))`
	}
}
function createRotation() {
	console.log(nextButton)
	console.log(pageIndex)
	// if (rotation) {
	// 	rotation.innerHTML = ''
	// }
	loader.classList.remove('short-vanish')
	loader.style.zIndex = '2'
	initial.style.zIndex = '1'
	initial.classList.remove('short-vanish')
	// initial.classList.add('show')

	HideShowCont()
	$('#product-reel')
		.reel('images', `./assets/${nextButton}/threesixty/${nextButton}_#.jpg`)
		.bind('loaded', function () {
			initial.classList.remove('show')
			initial.classList.add('short-vanish')
			loader.style.zIndex = '-100'
			setTimeout(() => {
				initial.style.zIndex = '-200'
			}, 400)
		})

	rotation.classList.toggle('show')
	rotation.classList.toggle('hidden')
	createBackButton('rotationPage')
	window.addEventListener('resize', resizeRotation)

	setTimeout(() => {
		showCont.innerHTML = ''
	}, 300)
}

function resizeRotation() {
	const rotationBackButton = document.querySelector('#rotation_backButton')
	if (rotationBackButton) {
		rotationBackButton.remove()
	}
	ArreglarLineas()
	createBackButton('rotationPage')
}

function exitRotation() {
	ArreglarLineas()
	backButtonRotation.style.pointerEvents = 'none'
	rotation.classList.remove('show')
	rotation.classList.add('short-vanish')
	createContent(buttonContent[nextButton], nextButton)
	animations()

	HideShowCont()
	window.removeEventListener('resize', resizeRotation)
}
function backButtonFunction() {
	ArreglarLineas()
	buttonGrid.style.pointerEvents = 'none'
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(video2, video2, video3, 'back')
	HideShowCont()
	loop.style.zIndex = '-5'
	loop.currentTime = 0
	loop.pause()
	video3.addEventListener('ended', () => {
		// video3.classList.add('short-vanish')
		loop.classList.remove('short-vanish')
		loop.classList.add('show')
		loop.play()
		setTimeout(() => {
			video1.remove()
			video2.remove()
			video3.remove()
			HideShowMainButtons()
		}, 500)

		loop.style.zIndex = '-1'
		if (subVideo1) {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}
		if (subVideoBackLoop) {
			subVideoBackLoop.remove()
			subVideoTurn.remove()
			subVideoBackLoop = ''
			subVideoTurn = ''
		}

		showCont.innerHTML = ''
	})
}
function backButtonFunctionFromBack() {
	console.log('working')
	ArreglarLineas()

	subVideoTurn.play()
	HideShowCont()
	loop.style.zIndex = '-5'
	loop.currentTime = 0
	loop.pause()
	subVideoTurn.addEventListener('ended', () => {
		console.log('subVideoTurn ending')
		loop.classList.remove('short-vanish')
		loop.classList.add('show')

		setTimeout(() => {
			loop.play()
		}, 0)
		subVideoTurn.classList.add('short-vanish')
		console.log(pageIndex)
		loop.style.zIndex = '-1'
		if (subVideo1) {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}
		if (subVideoBackLoop) {
			subVideoBackLoop.remove()
			subVideoTurn.remove()
			subVideoBackLoop = ''
			subVideoTurn = ''
		}
		video1.remove()
		video2.remove()
		video3.remove()
		HideShowMainButtons()
		showCont.innerHTML = ''
	})
}

function backButtonFunctionFront() {
	ArreglarLineas()

	console.log('backbuttonfunctionfront')
	backButton.style.pointerEvents = 'none'
	if (nextButton === 'finishO') {
		subVideoFinish1.style.opacity = 0
		subVideoFinish2.style.opacity = 0
		subVideoFinish3.style.opacity = 0
		subVideo2.style.opacity = 1
	}
	subVideo1.style.opacity = 0

	if (videoPlaying === 1) {
		subVideo2.style.opacity = '0'
		InterpolateVideo(subVideo1, subVideo1, subVideo3, 'back')
	} else if (videoPlaying === 2) {
		InterpolateVideo(subVideo2, subVideo2, subVideo3, 'back')
	}

	HideShowCont()
	subVideo3.addEventListener('ended', () => {
		console.log('video3 ended')
		subVideo3.classList.add('short-vanish')

		video2.classList.remove('short-vanish')
		video2.classList.add('show')

		showCont.innerHTML = ''
		video2.currentTime = 0
		video2.pause()
		setTimeout(() => {
			video2.play()
		}, 500)

		pageIndex = 'mainMenuFront'

		nextButton = currentButton
		createContent(buttonContent[currentButton], currentButton)

		animations()

		HideShowCont()
		setTimeout(() => {
			subVideo1.remove()
			subVideo2.remove()
			subVideo3.remove()
		}, 500)
		videoPlaying = 2
	})
}
function backButtonFunctionSpecific() {
	ArreglarLineas()

	console.log('backbuttonfunctionSpecific')
	backButton.style.pointerEvents = 'none'

	// InterpolateVideo(subVideo2, subVideo2, subVideo3)
	specificVideo.classList.remove('show')
	specificVideo.classList.add('short-vanish')
	if (videoPlaying === 2) {
		specificVideoLoop.classList.remove('show')
		specificVideoLoop.classList.add('short-vanish')
	}
	subVideo2.play()
	HideShowCont()

	// setTimeout(() => {
	// 	video2.classList.remove('short-vanish')
	// 	video2.classList.add('show')
	// }, 500)

	showCont.innerHTML = ''

	nextButton = currentButton
	createContent(buttonContent[pageIndex].boxInfo[currentButton])
	currentButton = pageIndex
	pageIndex = 'mainMenuFront'
	// console.log('nextButton:' + nextButton)
	// console.log('currentButton:' + currentButton)
	// console.log('pageIndex:' + pageIndex)
	animations()

	HideShowCont()
	setTimeout(() => {
		specificVideo.remove()
		specificVideoLoop.remove()
	}, 500)
	videoPlaying = 2
}
function backButtonFunctionBack() {
	ArreglarLineas()
	backButton.style.pointerEvents = 'none'

	InterpolateVideo(subVideo2, subVideo2, subVideo3, 'back')
	HideShowCont()
	subVideo3.addEventListener('ended', () => {
		subVideo3.classList.add('short-vanish')
		subVideoTurn.classList.remove('short-vanish')
		showCont.innerHTML = ''

		pageIndex = 'mainMenuBack'
		createContent(buttonContent[dataId[1]], dataId[1])

		HideShowCont()
	})
}

function createBackButton(param) {
	const rotationBackButton = document.querySelector('#rotation_backButton')
	if (rotationBackButton) {
		rotationBackButton.remove()
	}

	if (param === 'rotationPage') {
		const centerContainerMade = document.createElement('div')
		centerContainerMade.classList.add('centerContainer')
		// centerContainerMade.style.pointerEvents = 'none'
		centerContainerMade.setAttribute('id', 'centerContainer_text')
		const textContainerMade = document.createElement('div')
		textContainerMade.classList.add('textContainer')
		textContainerMade.style.width = containVideoWidth + 'px'
		textContainerMade.style.height = containVideoHeight + 'px'
		rotationPage = document.createElement('div')
		rotationPage.classList.add('rotationPage')

		backButtonRotation = document.createElement('button')
		backButtonRotation.classList.add('backButton')
		backButtonRotation.style.fontSize = buttonFontvar
		backButtonRotation.style.width = `calc(47px + (147 - 47) * ((${
			containVideoWidth + 'px'
		} - 320px) / (1440 - 320)))`

		backButtonRotation.classList.add('button')
		backButtonRotation.addEventListener('click', exitRotation)
		console.log(backButtonRotation)
		backButtonRotation.textContent = 'Back'
		backButtonRotation.style.pointerEvents = 'all'
		backButtonContainer = document.createElement('div')
		brandIcon = document.createElement('img')
		brandIcon.src = 'assets/icons/onefiftyLogo.png'
		brandIcon.classList.add('brandIcon', 'brandIconR')
		backButtonContainer.classList.add('viewRContainer')
		rotation.appendChild(centerContainerMade)
		centerContainerMade.appendChild(textContainerMade)

		textContainerMade.appendChild(rotationPage)
		rotationPage.appendChild(backButtonContainer)
		backButtonContainer.appendChild(backButtonRotation)
		backButtonContainer.appendChild(brandIcon)
		centerContainerMade.setAttribute('id', 'rotation_backButton')
	} else {
		backButton = document.createElement('button')
		backButton.classList.add('backButton')
		backButton.style.fontSize = buttonFontvar
		backButton.classList.add('button')
		backButton.textContent = 'Back'
		backButtonContainer = document.createElement('div')
		brandIcon = document.createElement('img')
		brandIcon.src = 'assets/icons/onefiftyLogo.png'
		brandIcon.classList.add('brandIcon')
		backButtonContainer.classList.add('backButtonContainer')

		firstPage.appendChild(backButtonContainer)
		if (
			nextButton === 'turnlock100' ||
			nextButton === 'lifelineSwing' ||
			nextButton === 'circlelockSolo' ||
			nextButton === 'circlelockCombi' ||
			nextButton === 'turnlock150'
		) {
			const backDuoContainer = document.createElement('div')
			backDuoContainer.classList.add('backDuoContainer')

			const explorePr = document.createElement('button')
			explorePr.classList.add('backButton')
			explorePr.classList.add('button')
			explorePr.style.fontSize = buttonFontvar

			explorePr.textContent = `Explore Product\nFamily`
			backDuoContainer.appendChild(backButton)
			backDuoContainer.appendChild(explorePr)
			backButtonContainer.appendChild(backDuoContainer)
			const idMapping = {
				'Turnlock 100': 'turnlock100',
				'Turnlock 150': 'turnlock150',
				'Circlelock Solo': 'circlelockSolo',
				'Circlelock Combi': 'circlelockCombi',
				'Lifeline Swing': 'lifelineSwing',
				'Speedlane\nCompact': 'speedCo',
				'Winglock Swing': 'wingSw',
			}
			explorePr.addEventListener('click', () => {
				createExploreBtns(nextButton)
				function createExploreBtns(machine) {
					let buttons = []
					let buttonLabels = []
					let gapStyle = ''
					let imgSrc = ''

					switch (machine) {
						case 'turnlock100':
							buttonLabels = ['Turnlock 100', 'Turnlock 150']
							gapStyle = '24vw'
							imgSrc = 'assets/productFa/turnlock.png'
							break
						case 'turnlock150':
							buttonLabels = ['Turnlock 100', 'Turnlock 150']
							gapStyle = '24vw'
							imgSrc = 'assets/productFa/turnlock.png'
							break
						case 'circlelockSolo':
							buttonLabels = ['Circlelock Solo', 'Circlelock Combi']
							gapStyle = '24vw'
							imgSrc = 'assets/productFa/circlelock.png'
							break
						case 'circlelockCombi':
							buttonLabels = ['Circlelock Solo', 'Circlelock Combi']
							gapStyle = '24vw'
							imgSrc = 'assets/productFa/circlelock.png'
							break
						case 'lifelineSwing':
							buttonLabels = [
								'Lifeline Swing',
								'Speedlane\nCompact',
								'Winglock Swing',
							]
							gapStyle = '15vw'
							imgSrc = 'assets/productFa/speedlane.png'
							break
						default:
							return
					}

					buttonLabels.forEach((label) => {
						const exploreBtn = document.createElement('button')
						if (label === 'Speedlane\nCompact' || label === 'Winglock Swing') {
							exploreBtn.classList.add('button', 'disabledPageButton')
						} else {
							exploreBtn.classList.add('button', 'pageButton')
						}

						exploreBtn.setAttribute('id', idMapping[label])

						exploreBtn.style.fontSize = globalFontvar
						exploreBtn.innerHTML = label
						buttonRow.appendChild(exploreBtn)
						buttons.push(exploreBtn)
					})

					buttonRow.style.gap = gapStyle
					exploreProImg.src = imgSrc

					buttons.forEach((btn, index) => {
						btn.addEventListener('click', () => {
							const btnId = btn.getAttribute('id')
							nextButton = btnId
							video1.remove()
							video2.remove()
							video3.remove()
							createVideos(
								`assets/${nextButton}/${nextButton}1.mp4`,
								`assets/${nextButton}/${nextButton}2.mp4`,
								`assets/${nextButton}/${nextButton}3.mp4`
							)
							if (showCont.innerHTML !== '') {
								showCont.innerHTML = ''
							}

							createContent(buttonContent[nextButton], nextButton)
							let videosCheck = false
							check1()
							function check1() {
								clearcheck = setInterval(repeatcheck, 600)
								function repeatcheck() {
									if (video2.readyState === 4) {
										videosCheck = true
									}

									setTimeout(() => {
										if (!videosCheck) {
											loader.style.zIndex = '200'
											loader.classList.add('show')
										}
									}, 3000)

									if (videosCheck) {
										loader.classList.remove('show')
										loader.classList.add('short-vanish')
										loader.style.zIndex = '-200'

										clearInterval(clearcheck)

										loop.classList.add('short-vanish')
										loop.classList.remove('show')
										exploreProContainer.classList.add('short-vanish')
										exploreProContainer.classList.remove('show')
										setTimeout(() => {
											exploreProContainer.style.display = 'none'
										}, 500)
										// exploreProContainer.style.display = 'none'
										buttonRow.innerHTML = ''
										animations()
										InterpolateVideo(loop, video1, video2)
										// HideShowCont()
										// })
									}
								}
							}
						})
					})
				}

				exploreProImg.style.width = containVideoWidth + 'px'
				exploreProImg.style.height = containVideoHeight + 'px'

				exploreProContainer.classList.add('show')
				exploreProContainer.classList.remove('short-vanish')
				setTimeout(() => {
					exploreProContainer.style.display = 'flex'
				}, 500)
			})
		} else {
			backButton.style.marginLeft = '6.5%'
			backButtonContainer.appendChild(backButton)
		}

		backButtonContainer.appendChild(brandIcon)

		if (param === 'rotation') {
		} else if (
			nextButton === 'standardO' ||
			nextButton === 'piggybackingP' ||
			nextButton === 'emergencyE' ||
			nextButton === 'finishO' ||
			nextButton === 'tailgatingD' ||
			nextButton === 'tailgatingP1' ||
			nextButton === 'tailgatingP2' ||
			nextButton === 'glassO' ||
			nextButton === 'piggybackingP1' ||
			nextButton === 'piggybackingP2' ||
			nextButton === 'operationW' ||
			nextButton === 'beSecure' ||
			nextButton === 'stereoV' ||
			nextButton === 'documents'
		) {
			backButton.addEventListener('click', backButtonFunctionFront)
		} else if (currentButton === 'stereoV' || currentButton === 'beSecure') {
			backButton.addEventListener('click', backButtonFunctionSpecific)
		} else if (
			nextButton === 'easyR' ||
			nextButton === 'ex78934S' ||
			nextButton === 'kr-bkzdinB'
		) {
			backButton.addEventListener('click', backButtonFunctionBack)
		} else if (pageIndex === 'mainMenuFront') {
			backButton.addEventListener('click', backButtonFunction)
		} else if (pageIndex === 'mainMenuBack') {
			backButton.addEventListener('click', backButtonFunctionFromBack)
		}
	}
}

function ArreglarLineas() {
	for (let i = 0; i < svgContainer.length; i++) {
		svgContainer[i].style.width = containVideoWidth + 'px'
		svgContainer[i].style.height = containVideoHeight + 'px'
	}
	for (let i = 0; i < buttonContainer.length; i++) {
		buttonContainer[i].style.width = containVideoWidth + 'px'
		buttonContainer[i].style.height = containVideoHeight + 'px'
	}
	// mainButtons.style.opacity = '0'
	if (!mainButtons.classList.contains('disabled')) {
		mainButtons.classList.add('show')
	}
}

function getRenderedSize(contains, cWidth, cHeight, width, height, pos) {
	var oRatio = width / height,
		cRatio = cWidth / cHeight
	return function () {
		if (contains ? oRatio > cRatio : oRatio < cRatio) {
			this.width = cWidth
			this.height = cWidth / oRatio
		} else {
			this.width = cHeight * oRatio
			this.height = cHeight
		}
		this.left = (cWidth - this.width) * (pos / 100)
		this.right = this.width + this.left
		return this
	}.call({})
}

function getImgSizeInfo(img) {
	var pos = window
		.getComputedStyle(img)
		.getPropertyValue('object-position')
		.split(' ')
	return getRenderedSize(
		true,
		img.offsetWidth,
		img.offsetHeight,
		img.videoWidth,
		img.videoHeight,
		parseInt(pos[0])
	)
}

loop.addEventListener('loadedmetadata', function (e) {
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	setFontSizes()
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
})

if (loop.readyState >= 1) {
	setFontSizes()
	containVideoWidth = getImgSizeInfo(loop).width
	containVideoHeight = getImgSizeInfo(loop).height
	ArreglarLineas()

	initial.classList.add('short-vanish')
	setTimeout(() => {
		initial.style.zIndex = '-200'
	}, 0)
}

window.addEventListener('DOMContentLoaded', function () {
	setFontSizes()
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	}
})

window.addEventListener('resize', function () {
	if (loop.readyState >= 1) {
		containVideoWidth = getImgSizeInfo(loop).width
		containVideoHeight = getImgSizeInfo(loop).height
		if (exploreProImg) {
			exploreProImg.style.width = containVideoWidth + 'px'
			exploreProImg.style.height = containVideoHeight + 'px'
		}

		setFontSizes()

		if (!mainButtons.classList.contains('disabled')) {
			ArreglarLineas()
		}
	}
	if (window.matchMedia('(max-width: 520px)').matches) {
		if (window.matchMedia('(orientation: portrait)').matches) {
			warningText.innerHTML =
				' Use the device in landscape mode in order to properly use this website'
			warning.style.opacity = '1'
			warning.style.zIndex = '300'
		}
	} else {
		if (window.matchMedia('(orientation: landscape)').matches) {
			warning.style.opacity = '0'
			warning.style.zIndex = '-100'
			window.scrollTo(0, document.body.scrollHeight)
		}
	}
})

////////// Event Listeners for the main buttons //////////

fullscreen_button.addEventListener('click', function (e) {
	expand.classList.toggle('disabledb')
	contract.classList.toggle('disabledb')

	if (!document.fullscreenElement) {
		mainContainer.webkitRequestFullscreen()
		mainContainer.webkitEnterFullscreen()
		mainContainer.requestFullscreen()
	} else {
		document.exitFullscreen()
		document.webkitExitFullscreen()
	}
})

mainMenuB.forEach((e, i) => {
	dataId[i] = e.dataset.id
	dataVariant[i] = e.dataset.variant

	e.addEventListener('click', function (e) {
		pageIndex = 'mainMenuFront'
		nextButton = dataId[i]
		console.log(nextButton)
		HideShowMainButtons()
		if (dataVariant[i]) {
			createVideos(
				`assets/${nextButton}/altVideos/${dataVariant[i]}/${nextButton}1.mp4`,
				`assets/${nextButton}/altVideos/${dataVariant[i]}/${nextButton}2.mp4`,
				`assets/${nextButton}/altVideos/${dataVariant[i]}/${nextButton}3.mp4`
			)
		} else {
			createVideos(
				`assets/${nextButton}/${nextButton}1.mp4`,
				`assets/${nextButton}/${nextButton}2.mp4`,
				`assets/${nextButton}/${nextButton}3.mp4`
			)
		}

		if (showCont.innerHTML !== '') {
			showCont.innerHTML = ''
		}

		createContent(buttonContent[nextButton], nextButton)

		window.addEventListener('resize', function () {
			if (showCont.hasChildNodes()) {
				const textContainer = document.querySelector('#centerContainer_text')
				textContainer.remove()
				if (pageIndex === 'mainMenuFront') {
					createContent(buttonContent[nextButton], nextButton)
				} else {
					if (
						nextButton === 'authorizedE' ||
						nextButton === 'walkA' ||
						nextButton === 'piggyBBS' ||
						nextButton === 'oneP' ||
						nextButton === 'lowO' ||
						nextButton === 'multipleP' ||
						nextButton === 'sensorB'
					) {
						createContent()
					} else {
						createContent(buttonContent[currentButton].boxInfo[nextButton])
					}
					if (elementContainer) {
						elementContainer.style.opacity = '1'
					}
				}

				animations()
				if (subVideo2) {
					subVideo2.currentTime = 0
					subVideo2.play()
				}
			}
		})
		let videosCheck = false
		check1()
		function check1() {
			clearcheck = setInterval(repeatcheck, 600)
			function repeatcheck() {
				if (video1.readyState === 4) {
					videosCheck = true
				}

				setTimeout(() => {
					if (!videosCheck) {
						loader.style.zIndex = '200'
						loader.classList.add('show')
					}
				}, 3000)

				if (videosCheck) {
					loader.classList.remove('show')
					loader.classList.add('short-vanish')
					loader.style.zIndex = '-200'

					clearInterval(clearcheck)

					loop.classList.add('short-vanish')
					loop.classList.remove('show')
					video1.style.opacity = 1

					video1.play()
					video1.addEventListener('ended', () => {
						animations()
						InterpolateVideo(loop, video1, video2)
						HideShowCont()
					})
				}
			}
		}
	})
})

// Check when the spinner is fully loaded
var SirvOptions = {
	spin: {
		onready: function () {
			initial.classList.remove('show')
			initial.classList.add('short-vanish')
			loader.style.zIndex = '-100'

			setTimeout(() => {
				initial.style.zIndex = '-200'
			}, 400)
		},
	},
}

close.addEventListener('click', function (e) {
	modalalert.style.pointerEvents = 'none'
	modalalert.style.transform = 'scale(0)'
	alertdiv.style.opacity = 0
	alertdiv.style.pointerEvents = 'none'
})
