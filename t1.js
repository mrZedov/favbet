console.log('start')

const sleep = ms => new Promise(resolve => {
	setTimeout(() => {
		resolve()
	}, ms)
})

sleep(2000).then(()=>console.log('res 2 sec'))

console.log('end')

Promise.all([sleep(2000), sleep(5000)]).then(()=>console.log('5 sec'))

