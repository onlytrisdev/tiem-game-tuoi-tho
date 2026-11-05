function addItem(parent, container, x, y, name, res, perfect, visible, clickHandler, overHandler, outHandler, downHandler)
{
    var tempItem = game.add.sprite(0, 0, res);

    tempItem.name = name;
    tempItem.anchor.set(0.5);
    tempItem.inputEnabled = true;
    //tempItem.input.pixelPerfectOver = perfect;
    //tempItem.input.pixelPerfectClick = perfect;
    //tempItem.input.pixelPerfectOut = perfect;

    if (perfect)
        tempItem.input.pixelPerfectClick = tempItem.input.pixelPerfectOver = tempItem.input.pixelPerfectOut = perfect;

    if (perfect)
        tempItem.input.pixelPerfectAlpha = 10;

    //if (perfect)
        tempItem.input.useHandCursor = true;

    if (clickHandler != null)
        tempItem.events.onInputUp.add(clickHandler, parent);

    if (downHandler != null)
        tempItem.events.onInputDown.add(downHandler, parent);

    if (overHandler != null)
        tempItem.events.onInputOver.add(overHandler, parent);

    if (outHandler != null)
        tempItem.events.onInputOut.add(outHandler, parent);

    tempItem.visible = visible;

    tempItem.x = x + tempItem.width / 2;
    tempItem.y = y + tempItem.height / 2;

    container.addChild(tempItem);

    return tempItem;
}

function addToBtn(sprite, parent, clickHandler, overHandler, outHandler)
{
    sprite.input.pixelPerfectClick = sprite.input.pixelPerfectOver = sprite.input.pixelPerfectOut = true;

    if (clickHandler != null)
        sprite.events.onInputUp.add(clickHandler, parent);

    if (overHandler != null)
        sprite.events.onInputOver.add(overHandler, parent);

    if (outHandler != null)
        sprite.events.onInputOut.add(outHandler, parent);
}

function contains(arr, element)
{
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] == element)
            return true;
    }

    return false;
}

function findAndRemove(arr, element)
{
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] == element)
        {
            arr.splice(i, 1);
            return;
        }
    }
}

function getLocation(href)
{
    var l = document.createElement("a");
    l.href = href;
    return l;
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function areAdsEnabled()
{
    var test = document.createElement('div');
    test.innerHTML = '&nbsp;';
    test.className = 'adsbox';
    document.body.appendChild(test);
    var adsEnabled;
    var isEnabled = function ()
    {
        var enabled = true;
        if (test.offsetHeight === 0)
        {
            enabled = false;
        }
        test.parentNode.removeChild(test);
        return enabled;
    };
    window.setTimeout(adsEnabled = isEnabled(), 100);
    return adsEnabled;
};
