const theme = {
    color: {
        textColor: '#000000',
        linkColor: '#000000'
    },
    text: {
        fontFamilyRegular: 'NotoSans-Regular',
        fontFamilyBold: 'NotoSans-Bold',
        fontFamilyHeading: 'NotoSans-Regular',
    },
    a: {
        margin:'0px',
        padding: '0px',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexGrow:'0',
        width:'auto',
        height:'auto',
        background:'transparent',
        radius:'0px',
        hoverBackground:'transparent',
        hoverColor:'#000000',
        hoverOpacity:'1',
        textDecoration:'none',
        fontSize: '18px'
    },
    article: {
        width: '100%',
        maxWidth: '768px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        padding: '0px',
        background: 'transparent',
        position: 'static',
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
        zIndex: 'auto',
        lineHeight: 'normal'
    },
    aside: {
        background: 'transparent',
        flexDirection: 'column',
        margin: '0px',
        padding: '0px',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexGrow: '0',
        width: 'auto',
        height: 'auto',
        minWidth: '0px',
        minHeight: '0px',
        maxWidth: 'none',
        maxHeight: 'none',
        position: 'static',
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
        zIndex: 'auto',
        fontSize: '18px'
    },
    button: {
        background: 'transparent',
        radius: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        width: 'auto',
        minWidth: '0px',
        minHeight: '0px',
        maxWidth: 'none',
        maxHeight: 'none',
        color: '#000000',
        textTransform: 'uppercase',
        padding: '0px 15px',
        margin: '0px',
        boxShadow: 'none',
        hoverBackground: 'transparent',
        hoverColor: '#000000',
        hoverOpacity: '0.8',
        activeOpacity: '0.5'
    },
    column: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexGrow: '0',
        background: 'transparent',
        height: 'auto',
        width: 'auto',
        minWidth: '0px',
        minHeight: '0px',
        maxWidth: 'none',
        maxHeight: 'none',
        padding: '0px',
        margin: '0px',
        cursor: 'auto',
        textAlign: 'left',
        boxShadow: 'none',
        position: 'static',
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
        zIndex: 'auto',
        flexWrap: 'nowrap',
        boxSizing: 'border-box',
        paddingMobile: '0px',
        marginMobile: '0px'
    },
    container: {
        flexDirection: 'column',
        background: 'transparent',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '60px 0px 30px 0px',
        width: '100%',
        minHeight: 'calc(100vh - 100px)'
    },
    divider: {
        height: '1px',
        color: '#CCCCCC',
        marginTop: '15px',
        marginBottom: '15px',
        width: '100%'
    },
    full: {
        background: '#000000',
        padding: '20px 0px 20px 0px',
        margin: '15px 0px 15px 0px'
    },
    grid: {
        width: '100%',
        maxWidth: '1440px',
        columns: 'repeat(3, 1fr)',
        columnsTablet: 'repeat(3, 1fr)',
        columnsMobile: 'repeat(3, 1fr)',
        gap: '30px',
        padding: '0px',
        margin: '0 auto',
        minHeight: '0px',
        paddingMobile: '0px',
        marginMobile: '0px'
    },
    headingOne: {
        letterSpacing:'-2.5px',
        lineHeight: '68px',
        color: '#000000',
        margin: '0px',
        padding: '0px',
        textAlign: 'left',
        textTransform: 'none',
        fontWeight: '700',
        fontSize: '48px'
    },
    headingTwo: {
        letterSpacing:'0px',
        lineHeight: '1.25',
        color: '#000000',
        margin: '0px',
        padding: '0px',
        textAlign: 'left',
        textTransform: 'none',
        fontWeight: '200',
        fontSize: '32px'
    },
    headingThree: {
        letterSpacing:'0px',
        lineHeight: '1.1',
        color: '#000000',
        margin: '0px',
        padding: '0px',
        textAlign: 'left',
        textTransform: 'none',
        fontWeight: '700',
        fontSize: '28px'
    },
    headingFour: {
        letterSpacing:'0px',
        lineHeight: '1.2',
        color: '#000000',
        margin: '0px 0px 16px 0px',
        padding: '0px',
        textAlign: 'left',
        textTransform: 'none',
        fontWeight: '500',
        fontSize: '24px'
    },
    icon: {
        background: 'transparent',
        radius: '0px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        padding: '0px',
        margin: '0px',
        flexGrow: '0',
        fill: 'inherit',
        boxShadow: 'none',
        hoverBackground: 'transparent',
        hoverColor: '#000000',
        hoverOpacity: '0.8',
        activeOpacity: '0.5'
    },
    input: {
        margin:'0px 0px 15px 0px',
        height: '40px',
        border: 'none',
        background: '#EEEEEE',
        padding: '0px 10px 0px 10px',
        radius: '5px',
        width: '100%',
        fontSize: '18px',
        color: '#000000'
    },
    list: {
        maxWidth: '768px',
        pointsType: 'disc',
        numbersType: 'decimal',
        margin: '0 auto',
        padding: '0px',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'flex-start',
        flexWrap: 'nowrap'
    },
    listitem: {
        margin: '0 auto',
        padding: '0px',
        background: 'transparent',
        radius: '0px',
        width: '100%',
        height: 'auto',
        minWidth: '0px',
        minHeight: '0px',
        maxWidth: 'none',
        maxHeight: 'none'
    },
    main: {
        background: 'transparent',
        padding: '0px',
        margin: '0px',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 'auto',
        height: 'auto',
        minWidth: '0px',
        minHeight: '0px',
        maxWidth: 'none',
        maxHeight: 'none',
        paddingMobile: '0px',
        marginMobile: '0px'
    },
    media: {
        background: '#000000',
        padding: '20px 0px 20px 0px',
        margin: '15px 0px 15px 0px',

    },
    p: {
        fontSize: '18px',
        lineHeight: '1.8',
        margin: '0px',
        padding: '0px',
        fontWeight: 'normal',
        color: '#000000',
        textAlign: 'left',
        textTransform: 'none',
        wordBreak: 'break-word',
        wordWrap: 'break-word'
    },
    pre: {
        fontSize: '14px',
        margin: '0px 0px 20px 0px',
        padding: '20px',
        whiteSpace: 'pre-wrap',
        background: '#000000',
        color: '#FFFFFF',
        lineHeight: '1.4',
        letterSpacing: '1px'
    },
    row: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexGrow: '0',
        background: 'transparent',
        height: 'auto',
        width: 'auto',
        minWidth: '0px',
        minHeight: '0px',
        maxWidth: 'none',
        maxHeight: 'none',
        padding: '0px',
        margin: '0px',
        cursor: 'auto',
        textAlign: 'left',
        boxShadow: 'none',
        position: 'static',
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
        zIndex: 'auto',
        flexWrap: 'nowrap',
        boxSizing: 'border-box',
        paddingMobile: '0px',
        marginMobile: '0px'
    },
    section: {
        maxWidth: 'none',
        maxHeight: 'none',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        padding: '0px',
        background: 'transparent',
        position: 'static',
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
        zIndex: 'auto',
        lineHeight: 'normal',
        color: '#FFFFFF'
    },
    select: {
        background: 'transparent',
        color: '#000000',
        width: '100%',
        height: 'auto',
        padding: '15px 10px',
        margin: '0px',
        border: '1px solid #000000',
        radius: '0px',
        maxHeight: 'none',
        listRadius:'0px',
        listShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
        listBackground: '#FFFFFF',
        listColor: '#000000',
        listOffset: '55px',
        optionPadding: '15px 10px',
        optionHoverBackground: 'rgba(0, 0, 0, 0.1)',
        optionHoverOpacity: '1',
        optionHoverColor: '#000000',
        disabledOptionOpacity:'0.6',
        iconColor: '#777777'
    },
    span: {
        fontSize: '18px',
        color: '#555555',
        lineHeight: '1.5',
        margin: '0px',
        padding: '0px',
        fontWeight: 'normal',
        position: 'static',
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
        zIndex: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'stretch',
        justifyContent: 'flex-start'
    },
    table: {
        border: '1px solid #000000',
        borderCollapse: 'collapse',
        borderSpacing: '2px',
        height: 'auto',
        width: 'auto',
        minWidth: '0px',
        minHeight: '0px',
        maxWidth: 'none',
        maxHeight: 'none',
        padding: '0px',
        margin: '0px',
        color: '#000000',
        cellWidth: 'auto',
        cellHeight: 'auto'
    },
    tag: {
        background: '#000000',
        radius:'4px',
        color: '#FFFFFF',
        padding: '3px 6px',
        margin: '10px 5px 0px 0px',
        fontSize: '18px'
    },
    header: {
        background:'#FFFFFF'
    },
    footer: {
        background:'#FFFFFF'
    },
}

export default theme