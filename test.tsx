import * as React from "react";
import * as PropTypes from "prop-types";
import { asDefaultProps, asPropTypes } from "./index";

function MyFunctionComponent(props: {name: string}) {
    return null;
}
MyFunctionComponent.defaultProps = asDefaultProps(MyFunctionComponent)({
    name: "Matt"
});
MyFunctionComponent.propTypes = asPropTypes(MyFunctionComponent)({
    name: PropTypes.string.isRequired
});
<MyFunctionComponent/>;

class MyComponentClass extends React.Component<{name: string}> {
    static defaultProps = asDefaultProps(MyComponentClass)({
        name: "Matt"
    });
    static propTypes = asPropTypes(MyComponentClass)({
        name: PropTypes.string.isRequired
    });
}
<MyComponentClass/>;

function MyRefForwardingComponent(props: {name: string}, ref: React.Ref<HTMLInputElement>) {
    return null;
}
MyRefForwardingComponent.defaultProps = asDefaultProps(MyRefForwardingComponent)({
    name: "Matt"
});
MyRefForwardingComponent.propTypes = asPropTypes(MyRefForwardingComponent)({
    name: PropTypes.string.isRequired
});
<MyRefForwardingComponent/>;

// For a generic component, the helpers can be used as follows to check that the
// defaultProps/propTypes are valid for all instantiations of the generic
// component.  This is a bit clunky.

type MyGenericPropsType<T extends string> = {foo: T | 42};

function MyGenericFunctionComponent<T extends string>(props: MyGenericPropsType<T>) {
    return null;
}
MyGenericFunctionComponent.defaultProps = (<T extends string>() => asDefaultProps<MyGenericPropsType<T>>(MyGenericFunctionComponent)({
    foo: 42
}))();
<MyGenericFunctionComponent/>;

class MyGenericComponentClass<T extends string> extends React.Component<MyGenericPropsType<T>> {
    static defaultProps = (<T extends string>() => asDefaultProps<MyGenericPropsType<T>>(MyGenericComponentClass)({
        foo: 42
    }))();
}
<MyGenericComponentClass/>;
