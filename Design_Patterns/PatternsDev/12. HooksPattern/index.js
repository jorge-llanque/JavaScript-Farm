/**
 * HOOKS PATTERN
 * Use functions to reuse stateful logic among multiple components throughout the app
 * 
 * -React 16.8 introduced a new feature called Hooks. Hooks make it possible to use React state and
 *  lifecycle methods, without having to use a ES2015 class component.
 * -Although Hooks are not necessarily a design pattern, Hooks play a very important role in your
 *  application design. Many traditional design patterns can be replaced by Hooks.
 */


/**
 * The common way to share code among several components, is by using the Higher Order Component or Render
 * Props pattern. Although both patterns are valid and a good practice, adding those patterns at a later point
 * in time requires you to restructure your application.
 */
// Wrapper Hell
<WrapperOne>
  <WrapperTwo>
    <WrapperThree>
      <WrapperFour>
        <WrapperFive>
          <Component/>
        </WrapperFive>
      </WrapperFour>
    </WrapperThree>
  </WrapperTwo>
</WrapperOne>

/**
 * It's quite clear that class components aren't always a great feature in React. In order to solve the
 * common issues that React developers can run into when using class components, React introduced React Hooks.
 * React Hooks are functions that you can use to manage a components state and lifecycle methods. React Hooks make it
 * possible to:
 * - Add state to a functional component
 * - Manage a component's lifecycle without having to use lifecycle methods such as componentDidMount and componentWillUnmount
 * - Reuse the same stateful logic among multiple components throughout the app
 */

/**
 * Custom Hooks
 * Besides the built-in hooks that React provides
 * - useState
 * - useEffect
 * - useReducer
 * - useRef
 * - useContext
 * - useMemo
 * - useImperativeHandle
 * - useLayoutEffect
 * - useDebugValue
 * - useCallback
 */
