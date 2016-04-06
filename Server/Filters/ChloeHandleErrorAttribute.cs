﻿using System;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;
using Microsoft.Practices.Unity;
using Chloe.Server.Utils.Contracts;
using Chloe.Server.Exceptions;

namespace Chloe.Server.Filters
{
    public class ChloeHandleErrorAttribute: ExceptionFilterAttribute
    {
        public ChloeHandleErrorAttribute(ILogger logger)
        {
            this.logger = logger;
        }

        public override void OnException(HttpActionExecutedContext context)
        {
            if (context.Exception is NotImplementedException)
            {
                logger.Log(context.Exception);
                context.Response = new HttpResponseMessage(HttpStatusCode.NotImplemented);
            }

            if (context.Exception is NotFoundException)
            {
                logger.Log(context.Exception);
                context.Response = new HttpResponseMessage(HttpStatusCode.NotFound);
            }
        }

        [Dependency]
        internal Chloe.Server.Utils.Contracts.ILogger logger { get; set; }
    }
}


