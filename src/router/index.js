// 引入路由表
import routes from './routes.js'
// 路由懒加载的时候要配合Suspense使用
import React, { Suspense } from 'react'
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Mask, DotLoading } from 'antd-mobile'
const Element = function (props) {
    let { component: Component, meta } = props
    let { title = '知乎日报' } = meta || {}
    document.title = title
    return <Component></Component>
}
export default function RouterView() {
    // fallback用来配置组件懒加载时，组件文件还没加载出来的时候要展示的
    return <Suspense fallback={<Mask visible={true}>
        <DotLoading color='white' />
    </Mask>}>
        <Routes>
            {routes.map(item => {
                let { name, path } = item
                return <Route
                    key={name}
                    path={path}
                    element={
                        <Element {...item}></Element>
                    }
                ></Route>
            })}
        </Routes>
    </Suspense>
}