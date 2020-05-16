﻿/*
 1. 鼠标移入显示,移出隐藏
    目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)

 9. 点击向右/左, 移动当前展示商品的小图片
 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */

$(function () {
	showHide()

	// 1. 鼠标移入显示,移出隐藏
	function showHide() {
		$('[name=show_hide]').hover(
			function () {
				var id = this.id + '_items'

				$('#' + id).show()
			},
			function () {
				var id = this.id + '_items'
				$('#' + id).hide()
			}
		)
	}

	// 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
	hoverSubMenu()
	function hoverSubMenu() {
		$('#category_items>div.cate_item').hover(
			function () {
				console.log(11)

				$(this).children('.sub_cate_box').show()
			},
			function () {
				$(this).children(':last').hide()
			}
		)
	}
})
