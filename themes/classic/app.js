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
.icon-dir{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mFYu0OFhBxCFDdbIgKuIoVSyChdJWaNXB5NI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Ik6OToouU+F1SaBHjHcc9vPe9L3ffAUKzylQzMAGommWkE3Exl18Ve18RoDmIMIISM/VkZjELz/F1Dx/f72I8y7vuzxFWCiYDfCLxHNMNi3iDeGbT0jnvE0dYWVKIz4nHDbog8SPXZZffOJccFnhmxMim54kjxGKpi+UuZmVDJZ4mjiqqRvlCzmWF8xZntVpn7XvyF4YK2kqG67RGkMASkkhBhIw6KqjCQox2jRQTaTqPe/iHHX+KXDK5KmDkWEANKiTHD/4Hv3trFqcm3aRQHOh5se2PUaB3F2g1bPv72LZbJ4D/GbjSOv5aE5j9JL3R0aJHQP82cHHd0eQ94HIHGHrSJUNyJD8toVgE3s/om/LAwC3Qt+b2rX2O0wcgS71avgEODoGxEmWve7w72N23f2va/fsBB0ByfJ0/evMAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBAQVNiXjFuYKAAAAq0lEQVQ4y+2VwQ3CMAxFn1E3cmYKM9UzxTN9DtCCKjWFtgcksGQ5B+vlJbISaxJnxoWTY5gWxayr2iR7G1jMpDZ2G81M70AN2ITNzeW6aT8ARAS11i4sIljb+NV+AKi1EhFdYG/DsTrlAf3oyGvmAJGQmcfHZml+GLi8qr/hzxnOQ/pBXRpakyhmGqvvt8x7zcw7cHrC3PdDMxN3hybNCWhvurua9DT82j/lBm8Ce28d5ByDAAAAAElFTkSuQmCC) left top no-repeat}
.icon-up{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAQAAADcrC56AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBAQUMiGB1Y0gAAAAAW9yTlQBz6J3mgAAAdpJREFUKM9lkr1PU3EUhp9zP1qgt6ShpJi2UosoQaksjJoYNV0YHDTxDzBxUGP8T4yLg4ODcXB0IjFuTVU0xq8oQgQ1QKVQ+iHYe3vvbe/PobbB+L7Tyfvk5M3JEf7qJkrX4vbYctgZlq9U8fG7idFDYuiGe9y9KAnSFFlii2Xq+AeQKCFpDMsMKbLMss93nlLgI80+olBKKengA3HipJhijnss9pE2SKCUj4cCwCRJHsTqIwOEVUtkkCh6f3E4mPVu90ZsRvVWtGlWOu3DDIqn+bIbfKivbGd7iKyHSkG2trNad8TSQ/JtoDJUKr/bOOKc6CGjzNRbrxv3nS+1Til2yN6yXS9XztnHiHa7jDDPOR6nPj/I+nObaWt6d7QakpinK0CAGPPcYJKX5s7YuHmyEmlHOmb3tIIOxLlCEZeApuwZLVNpir4H1FEF1yjgov63KEOlmpdWDPJMEeIfCRpaYLgJN/Mq/sjgIYo8w91QwyRwVGtERbc7n3LliQXrucEz9tG4QIRfeEOStP331bVxL7e2Xkzunane8Q0cFtHQOcWCrFoy3bTeFjYTndP21eYEPyliAA4v0DnPE5YsMv5dexKfGm/4wWVuIf13SbMhvzPkOUuD6wfK/wHBCcZftDFjfgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0wNFQyMDo1MDozMyswMDowMB6bUgYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMDRUMjA6NTA6MzMrMDA6MDBvxuq6AAAAAElFTkSuQmCC) left top no-repeat}
.icon-audio{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAQAAADcrC56AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA75o43NsAAAAHdElNRQfkBAQULiAQpeDrAAABvklEQVQoz22SP2gTYRiHn/e7u6TmSq45kmBiIpSoKQRilSII/sPZTC7iLBQnB+eOBZfiqKuL4CjiIKKCYonUWhFLyCApHdSiNpo/Jr1cvs/BQG3Nuz4PD7/htRh3Co8Zpp3w4O+2GYddjstNVafrLZUyi7IXW8SY44a1Gjcp7Zj8zmzlvG3/g12OccGuRM7lmKYj70Ehhl0lxRXnknM2GymQx+UpvRHYVRJcnjpziiQJ6jT4gkb2KYaBRZomL+kQEsXB7FNAvvMQxQC/51V/uKaMs19B0MRDr2o/iz9YPx0ukv5PiZF7N/HIerz5cTVgDg1jKqyWbt2bVPOZYu9Iy/s7xrYQNBqGaANmzbGuzi1c9Fd4BeGoEpOWT4HDeAJmy0mcLPsOnxmMyraSVjZ6vVhJR6p5A5IcbHx4vt31t3CIKqVCUQPLLc3OXysXZ5QLSG7Yvb9xp7+d5BDua7URDG1EDvQTb1mmjQfAia+/7sY2JWMb6wX1HW1hTP+nXyt/kwhp3JXhExMutGu16BtV1Y180MYC3YqsT/mpgh9MLtu3g4bwic5gGOhA6yaC2BxlwiYrWYGmNCQIWdvzRH8Ab2CZzsotOLEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMDRUMjA6NDY6MzIrMDA6MDB0fPY1AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTA0VDIwOjQ2OjMyKzAwOjAwBSFOiQAAAABJRU5ErkJggg==) left top no-repeat}
.icon-7z{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfkBQgTHRi+Nb3IAAAB7klEQVQoz2WTv2sUQRiGn292dvf29ryQYLBSLJSQImAtWtjEwmtSGfAPEKOgiMWlsNAgiBEbqxDTiSBYqEgKwYC1jQqCWph4RNREg97lvMt6M5/FXi4/fKYbnoGP950P6COiUA5uSwPdOtIK7iR7ImIGAbAgZARn/Xl5Ie/IUYp62l3MomQya/ykwjOAhKQsr2QhLdNjxJjHKN7cjUqWkDEsgBbo09fN+ik+IIR8ooa2AfETzhSqncZ8Lm4yjwIQ4UAAMO5ca6M46TYMbN5tETLu5RtN6jTwOtE+2cYO0OoJMRVA6HCP6EbnvoqoHHW3/LA+tWsIiQMU2jzqPcpWzAoAdbmKgDVX/N5WQklGzDViLKCoGqlFc9rMwCgCWD8Num4u6aJPuakDdKRfU5DVv895vzW3yafXM0EafJcsqiaj9kmeuRpltxgzJF/9BX9Ex+P97ni3ne1eV0Rmtd+PSbMwlx0jb0h2ppbn2Ahq7jIlsyyt8G34EkCM+O2mDa7rPok6U/wyM7jWCVQ/mxmMLNkvit/ZRDooH5ndVQ8WiyEY5oepgj3AKk7ywA/iupIQYFkmA0QAbI0Y2vyWQ2l5qc5/2MMUZQ0shKzXzUOd+vOg93E3USm6CotmQQBSQuKymZb69lXoLoSaN3YUhvgHlFC/SvbklcMAAABBdEVYdGNvbW1lbnQAQ1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODUKC8DAuwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wOFQxOToyOToyNCswMDowMEmMLvwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDhUMTk6Mjk6MjQrMDA6MDA40ZZAAAAAAElFTkSuQmCC) left top no-repeat}
.icon-zip{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAQAAAA3m5V5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfkBQkDNzfeFYisAAABSElEQVQoz3WSPUtDQRBFz8wmmkcMIQkYFFvtBe0t7GysbQIWFmIR7FJZaCM2CrEQRcFC8A+kEvMDREGxUhCxsAuiedGY97EWxpD3MGebZedyLzszOFV9x6XZd1zaUhkWRflFtBFucYXhD0uGXYpStscKhAA0mCZKhmssDVmCBAVAoc8FMBiRAMjbPVnwka4ogsNEUw+oUaNlF+GtGzfTL0rjACaJss2pAJCIO7XIkOHTAy7I2u5rzOk/dFBBkN4tHjfOMilCcx948qXFcIpAb+OiFJPkmbdnJG3HzvJBJ1yNxz1RMkfyrPt8Y2lTYd1qxMnBR3JeWc79G5SQIdboSEKjWR5+iRFzgiKAMIrqRsTJJTnmr9isd8gdDi08NqkH0d9ZxGWHAoYX6nS45BFy0S0w0Vn3SCjhHGkMwmvwMKCzvc1sUx3U/R8lgmk3/bDp/AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wOVQwMzo1NTo1NSswMDowMN8Bz50AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDlUMDM6NTU6NTUrMDA6MDCuXHchAAAAAElFTkSuQmCC) left top no-repeat}
</style>`);

// .icon-image{background:url() left top no-repeat}
// .icon-video{background:url() left top no-repeat}
// 
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
        } else if(item['mimeType'] == 'application/x-7z-compressed'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-7z" href="${p}">${item.name}</a></td>
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
