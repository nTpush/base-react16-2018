const IF_CHANGE1 = '加机关枪'
const IF_CHANGE2 = '减机关枪'

/**
 * 初始化参数
 */
export let initState = {
	menu: {
		disabled: true,
		theme: 'light',
		lists: [
			{
				id: 3,
				name: '文件管理',
				children: [
					{
						id: 1,
						name: '图片上传',
						path: '/image',
						type: 'picture'
					},
					{
						id: 2,
						name: '文件上传',
						path: '/file',
						type: 'setting'
					}
				]
			}
		]
	}
}

export function baseConfig(state = initState, action) {
	switch (action.type) {
		case IF_CHANGE1:
			return state
		case IF_CHANGE2:
			return state
		default:
			return state
	}
}

export function add() {
	return { type: IF_CHANGE1 }
}

export function remove() {
	return { type: IF_CHANGE2 }
}

/**
 * 异步
 */
export function addAsync() {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(add())
		}, 2000)
	}
}
