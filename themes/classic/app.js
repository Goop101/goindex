document.write(`
<style>
*{box-sizing:border-box}
h1{border-bottom:1px solid silver;margin-bottom:10px;padding-bottom:10px;white-space:nowrap}
table{border-collapse:collapse;font-family:Consolas,monaco,monospace}
th{font-weight:700}
.file-name{text-align:left}
.file-type{text-align:center}
.file-size{padding-left:4em}
.file-date-created,
.file-date-modified{padding-left:2em}
.file-date-created,
.file-date-modified,
.file-size{text-align:end;white-space:nowrap}
.icon{padding-left:1.5em;text-decoration:none}
.icon:hover{text-decoration:underline}
.icon-file{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABHUlEQVR42o2RMW7DIBiF3498iHRJD5JKHurL+CRVBp+i2T16tTynF2gO0KSb5ZrBBl4HHDBuK/WXACH4eO9/CAAAbdvijzLGNE1TVZXfZuHg6XCAQESAZXbOKaXO57eiKG6ft9PrKQIkCQqFoIiQFBGlFIB5nvM8t9aOX2Nd18oDzjnPgCDpn/BH4zh2XZdlWVmWiUK4IgCBoFMUz9eP6zRN75cLgEQhcmTQIbl72O0f9865qLAAsURAAgKBJKEtgLXWvyjLuFsThCSstb8rBCaAQhDYWgIZ7myM+TUBjDHrHlZcbMYYk34cN0YSLcgS+wL0fe9TXDMbY33fR2AYBvyQ8L0Gk8MwREBrTfKe4TpTzwhArXWi8HI84h/1DfwI5mhxJamFAAAAAElFTkSuQmCC) left top no-repeat}
.icon-dir{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAMAAAAVBLyFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABgFBMVEU8MCQCAgEEAwIFBAMDAgIEAgAAAAALCwshGxUAAAAWEQ0kHRYlHRYlHRYlHRYiGxQIBwUmHxd3YEi9mXOwjmtYRzYEBAMAAAAAAAAAAAAAAAA8LR+2jGNyW0NqVUBrVkBpVUA/MyYAAACKZ0QlGQ0AAQNCNCYICgtCNSizj2kODAozIxRWPSQhISEZGRkJCgsQEREdHR4sLCzCnXbDnnfHmm7/zZn/z5v/zpr2xZFAMSHCk2TNmmbLmGXKmGXMmWbdq3j1xZP3yJbsvo1NPi7htIXntYLksn/pt4T8ypf/zZr/zJn+zJndqnahcUFMPS3ovI3/0Jz/zpvirnukdUVIOi0KCwznu43hrXqkdERHOiyickKldUVMPS7qvo/7yZX3xZL5xpP2xJH6x5T2w5D3xJHXpHCjc0NIOizHlWLDj1zCj1vHk2C/i1jJlmK9ila+i1jCjlu9ileTbUc+NSwLCwxjSjFjSjJjSzJkSzJjSzNDOjEQEREQEBESEhL////YWDVgAAAAM3RSTlMAAAAAAAAAAAACRqatrK6TJV3L/veqQTQ1MxDu++jl5uGIGfafLvnPxfgpmPL985X66X2D+LADAAAAAWJLR0R/SL9x5QAAAAd0SU1FB+QDHBU4MtnL7SMAAAABb3JOVAHPoneaAAAAz0lEQVQY02Pg5OLm4eXl5eMXYGBkAgJmFgZBIWFjIDARERUTl5CQlGJlY5A2NTO3sLAwt5SRlZOXV1BUYmewsraxBQI7ewdHJycnZ2UVVQYXVzd3EPDw9PL28vH1U1Nn8A8IDAIBL28g8AkOCQ1j8A+38IYDn4jIKHQh32gMoeAYsFCQFxB4A6GXF0RjbFx8QkJiUnJKclJiQmpaekYYg4ZmZlZ2Tm5efl5BTmFWUXFJKYOWtk5ZeUVZJRBWlJVXVevqMXAo6RvUwEFtnaERANFjRZRZQ9ugAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAzLTI4VDIxOjU2OjUwKzAwOjAwALQgmgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMy0yOFQyMTo1Njo1MCswMDowMHHpmCYAAAAASUVORK5CYII=) left top no-repeat}
.icon-up{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWBAMAAAAyb6E1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEXM//9mZmYzMzOZmZkAAAD///863hdNAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQfkAxwTMQdaN+77AAAAWUlEQVQI12XM0Q2AMAgEUBIZoCM0pwOYjlDZfyYL4hHjfV0e5ES+aWAdQKeyLwVKk0NRqs+Hm+VG3w6vfhlmXk0WRVXLLMzMwotojbpL/s7T1/Utscuo/HIDH5UWa2XJ+/sAAABWdEVYdGNvbW1lbnQAVGhpcyBhcnQgaXMgaW4gdGhlIHB1YmxpYyBkb21haW4uIEtldmluIEh1Z2hlcywga2V2aW5oQGVpdC5jb20sIFNlcHRlbWJlciAxOTk1dvbvnAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMy0yOFQxOTo0OTowNyswMDowMJsUYosAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDMtMjhUMTk6NDk6MDcrMDA6MDDqSdo3AAAAAElFTkSuQmCC) left top no-repeat}
.icon-audio{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAQAAABqSHSNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA75o43NsAAAAHdElNRQfkBAQULB7j8p/CAAACG0lEQVQoz3XTu09TYRjH8e973nNtKaWApUQKEaNCRCWaQBw0wcvqoImJkcRN4uTI7OrK5L/gooODt6iLgwshEIkKAaFgaUPBAj3QyzmPi3Kz/OZPnlvyKI6KwiNJTG3Z2ZGdTcwjmEmKQe4zYIw3jPkfpVYPGvRwkofWOetYNWIlE8b0vMwdhg49dPLI6Gg8nXQirLBp6c7Q40DrJrro4zbp1ksR4wLtzJMBJEAOwm4e2Ffjfa7ZTxKDGnnWiewOvZdmBr3+i3RSIcIXViki+7bbS0BZ4ZLgFTXyCM5uPQ6dR23xmSlyQHInlikZpRTRepCAIr4cr9h5eyo6tpjwH0cH60KHjoqbtRfUE5mJ5X5foVS/NQZmxhlRs7nCSsuPNt0WeEdAUFVj6Vdu+XJ0NNVdcVda9kENBAAhIYDIaio6emPouj3JS7b/QQPBcoJTRDhLHECU9pp7eu0ckxSx/97SBLzyzea7Z9KVxukTAijY8ifepwrOElUasbQYYIqSttbha7d6nWlmqAJKjPXCs4LtDblunHjZ+RZuIKYommJ97Y4iyw4aAQb8D29bdGxNd1l4C9bzWg4xETZK3z91F50MAU1oLcpXyeDOu68/g0RIsF6eMcugLXRpcy3f7qdN3UBrOTrBCynGpRL4+XBRFiVPAOOYglWpvknjbuvzOrBnjaeSDUN4/d8LAfeYi4RJGkRkm2XKIYrxQ/APIwHM2dEpNlUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMDRUMjA6NDQ6MzArMDA6MDDnFjchAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTA0VDIwOjQ0OjMwKzAwOjAwlkuPnQAAAABJRU5ErkJggg==) left top no-repeat}
</style>`);

// .icon-image{background:url() left top no-repeat}
// .icon-video{background:url() left top no-repeat}
// .icon-zip{background:url() left top no-repeat}
// .icon-text{background:url() left top no-repeat}
// .icon-pdf{background:url() left top no-repeat}
// .icon-msword{background:url() left top no-repeat}

// .icon-XYZ{background:url() left top no-repeat}

// 初始化页面，并载入必要资源
function init(){
    document.siteName = $('title').html();
    $('body').addClass("mdui-theme-primary-blue-grey mdui-theme-accent-blue");
    var html = `
    <h1 id="heading">Index of <?php echo urldecode($path);?></h1>
    <table id="table">
    </table>
	`;
    $('body').html(html);
}

function render(path){
	if(path.indexOf("?") > 0){
		path = path.substr(0,path.indexOf("?"));
	}
    title(path);
    nav(path);
    if(path.substr(-1) == '/'){
    	list(path);
    }else{
	    file(path);
    }
}


// 渲染 title
function title(path){
    path = decodeURI(path);
    $('title').html(document.siteName+' - '+path);
}

// 渲染导航栏
function nav(path){
	path = decodeURI(path);
    $('#heading').html('Index of '+path);
}

// 渲染文件列表
function list(path){
	var content = `
<tr><th class="file-name">Name</th><th class="file-size">Size</th><th class="file-date-modified">Date Modified</th><th class="file-type">Type</th></tr>
	`;

	if(path != '/'){
		var up = path.split('/');
		up.pop();up.pop();
		up = up.join('/')+'/';
		content += `
<tr>
	<td class="file-name">
		<a class="icon icon-up folder" href="${up}">..</a>
	</td>
	<td class="file-size"></td>
	<td class="file-date-modified"></td>
</tr>
		`;	
	}
	$('#table').html(content);
	
    var password = localStorage.getItem('password'+path);
    $.post(path,'{"password":"'+password+'"}', function(data,status){
        var obj = jQuery.parseJSON(data);
        if(typeof obj != 'null' && obj.hasOwnProperty('error') && obj.error.code == '401'){
            var pass = prompt("password","");
            localStorage.setItem('password'+path, pass);
            if(pass != null && pass != ""){
                list(path);
            }else{
                history.go(-1);
            }
        }else if(typeof obj != 'null'){
            list_files(path,obj.files);
        }
    });
}

function list_files(path,files){
    html = "";
    for(i in files){
        var item = files[i];
        if(item['size']==undefined){
            item['size'] = "";
        }
        item['modifiedTime'] = utc2beijing(item['modifiedTime']);
        item['size'] = formatFileSize(item['size']);
        if(item['mimeType'] == 'application/vnd.google-apps.folder'){
        	var p = path+item.name+'/';
            html +=`
				<tr>
					<td class="file-name"><a class="icon icon-dir folder" href="${p}">${item.name}/</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'audio/mpeg'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-audio" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'image/jpeg'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-image" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
                    <td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'video/mpeg'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-video" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/zip'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-zip" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'text/plain'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-text" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/pdf'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-pdf" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
                    <td class="file-date-modified">${item['mimeType']}</td>
                    <td class="file-date-modified">${item['iconLink']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/msword'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-msword" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/x-msdos-program'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-x-msdos-program" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/x-msdownload'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-x-msdownload" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/x-bittorrent'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-application/x-bittorrent" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/vnd.google-apps.spreadsheet'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-google.spreadsheet" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
                    <td class="file-date-modified">application/google.spreadsheet</td>
                    <td class="file-date-modified">${item['iconLink']}</td>
                    
				</tr>
            `;
        } else if(item['mimeType'] == 'application/vnd.google-apps.presentation'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-google.presentation" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">application/google.presentation</td>
				</tr>
            `;
        } else{
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-file" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
                    <td class="file-date-modified">${item['modifiedTime']}</td>
                    <td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        }
    }
    $('#table').append(html);
}

//时间转换
function utc2beijing(utc_datetime) {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0,T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos+1,Z_pos-T_pos-1);
    var new_datetime = year_month_day+" "+hour_minute_second; // 2017-03-31 08:02:06

    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp/1000;

    // 增加8个小时，北京时间比utc时间多八个时区
    var unixtimestamp = timestamp+8*60*60;

    // 时间戳转为时间
    var unixtimestamp = new Date(unixtimestamp*1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    return year + "-" + month.substring(month.length-2, month.length)  + "-" + date.substring(date.length-2, date.length)
        + " " + hour.substring(hour.length-2, hour.length) + ":"
        + minute.substring(minute.length-2, minute.length) + ":"
        + second.substring(second.length-2, second.length);
}

// bytes自适应转换到KB,MB,GB
function formatFileSize(bytes) {
    if (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2)+' GB';}
    else if (bytes>=1000000)    {bytes=(bytes/1000000).toFixed(2)+' MB';}
    else if (bytes>=1000)       {bytes=(bytes/1000).toFixed(2)+' KB';}
    else if (bytes>1)           {bytes=bytes+' bytes';}
    else if (bytes==1)          {bytes=bytes+' byte';}
    else                        {bytes='';}
    return bytes;
}

// 监听回退事件
window.onpopstate = function(){
    var path = window.location.pathname;
    render(path);
}


$(function(){
    init();
    var path = window.location.pathname;
    $("body").on("click",'.folder',function(){
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });

    render(path);
});
