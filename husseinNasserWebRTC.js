// Hussein Nasser => webRTC
// 1- videos => https://www.youtube.com/watch?v=FExZvpVvYxA
// 2- source code => https://github.com/hnasr/javascript_playground/tree/master/webrtc

// local connection
const lc = new RTCPeerConnection();

// Data Channel
const dc = lc.createDataChannel("channel");

// When send message
dc.onmessage = e => console.log("Just got a message " + e.data);


dc.onopen = e => console.log("Connection opened!");


lc.onicecandidate = e => console.log("New Ice Candidate! reprinting SDP" +
 JSON.stringify(lc.localDescription));

 // Create Offer
 lc.createOffer().then(o => lc.setLocalDescription(o) ).then(a => console.log("set successfully!"))





 // Second Device (B)

 const offer = {};// New Ice Candidate! reprinting SDP


// Remote Connection
 const rc = new RTCPeerConnection();

 rc.onicecandidate = e => console.log("New Ice Candidate! reprinting SDP" +
  JSON.stringify(rc.localDescription));

  rc.ondatachannel = e => {
    // dc => Data Cahnnel
      rc.dc = e.channel;
      rc.dc.onmessage = e => console.log("new message from client! " + e.data)
      rc.dc.onopen = e => console.log("connection opened!!!!")
  }


rc.setRemoteDescription(offer).then(a => console.log("offer set!"))

rc.createAnswer().then (a => rc.setLocalDescription(a)).then(a=> console.log("answer created"));





// return again to (A)
const answer = {} // New Ice Candidate! reprinting SDP

lc.setRemoteDescription(answer)

dc.send("Yo peer B what up")



// another device (B)
rc.dc.send("fine what about you");



// return again to (A)
// video or camar or mic
// lc.addTrack()
